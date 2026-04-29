import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  topic: z.enum(["detaliczne", "hurtowe", "reklamacja", "zwrot", "inne"]),
  company: z.string().optional(), // honeypot
});

const emailMap: Record<string, string> = {
  // detaliczne: "robgra97@onet.pl",
  // hurtowe: "robert.grabowski97@gmail.com",
  // reklamacja: "robert.grabowskisu@gmail.com",
  // zwrot: "robert.grabowski97@gmail.com",
  // inne: "robert.grabowski97@gmail.com",
  detaliczne: "zamowienia@verk.sklep.pl",
  hurtowe: "zamowienia@internetowa-hurtownia.pl",
  reklamacja: "reklamacje@verkgroup.pl",
  zwrot: "zwroty@verkgroup.pl",
  inne: "zamowienia@verk.sklep.pl",
};

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let rawData: any = {};
    let file: File | null = null;

    // 🔥 AUTO: JSON vs FormData
    if (contentType.includes("application/json")) {
      rawData = await req.json();
    } else {
      const formData = await req.formData();

      rawData = {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        message: String(formData.get("message") || ""),
        topic: String(formData.get("topic") || ""),
        company: String(formData.get("company") || ""),
      };

      file = formData.get("file") as File | null;
    }

    console.log("📩 Incoming data:", rawData);

    const parsed = schema.safeParse(rawData);

    if (!parsed.success) {
      console.error("❌ Zod error:", parsed.error.flatten());
      return new Response("Invalid data", { status: 400 });
    }

    const { name, email, message, topic, company } = parsed.data;

    // 🛑 honeypot
    if (company) {
      return new Response("Spam detected", { status: 200 });
    }

    let attachments: any[] = [];

    // 📎 file handling (only if FormData)
    if (file && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) {
        return new Response("Plik za duży (max 5MB)", { status: 400 });
      }

      const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];

      if (!allowedTypes.includes(file.type)) {
        return new Response("Niedozwolony typ pliku", { status: 400 });
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const recipient = emailMap[topic];

    if (!recipient) {
      console.error("❌ Unknown topic:", topic);
      return new Response("Invalid topic", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formularz kontaktowy Verk wizytówka" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `Nowa wiadomość (${topic})`,
      html: `
        <h2>Nowa wiadomość</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Temat:</strong> ${topic}</p>
        <p><strong>Wiadomość:</strong><br/>${message}</p>
        ${attachments.length ? `<p><strong>Załącznik:</strong> TAK</p>` : ""}
      `,
      attachments,
    });

    const topicLabels: Record<string, string> = {
      detaliczne: "zamówienia detalicznego",
      hurtowe: "zamówienia hurtowego",
      reklamacja: "reklamacji",
      zwrot: "zwrotu",
      inne: "zapytania",
    };

    await transporter.sendMail({
      from: `"Verk Group" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Potwierdzenie zgłoszenia - ${topicLabels[topic]}`,
      html: `
    <h2>Dziękujemy za kontakt!</h2>
    <p>Twoja wiadomość dotycząca <strong>${topicLabels[topic]}</strong> została wysłana.</p>
    <p>Odezwiemy się najszybciej jak to możliwe.</p>

    <hr/>

    <p><strong>Twoja wiadomość:</strong></p>
    <p>${message}</p>
  `,
    });

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("🔥 Server error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
