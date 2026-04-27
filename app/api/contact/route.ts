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
  detaliczne: "robgra97@onet.pl",
  hurtowe: "robert.grabowski97@gmail.com",
  reklamacja: "robert.grabowskisu@gmail.com",
  zwrot: "robert.grabowski97@gmail.com",
  inne: "robert.grabowski97@gmail.com",
  // detaliczne: "zamowienia@verk.sklep.pl",
  // hurtowe: "zamowienia@internetowa-hurtownia.pl",
  // reklamacja: "reklamacje@verkgroup.pl",
  // zwrot: "zwroty@verkgroup.pl",
  // inne: "zamowienia@verk.sklep.pl",
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      topic: formData.get("topic"),
      company: formData.get("company"),
    };

    const parsed = schema.safeParse(rawData);

    if (!parsed.success) {
      return new Response("Invalid data", { status: 400 });
    }

    const { name, email, message, topic, company } = parsed.data;

    // 🛑 honeypot
    if (company) {
      return new Response("Spam detected", { status: 200 });
    }

    const file = formData.get("file") as File | null;

    let attachments = [];

    if (file && file.size > 0) {
      //  limit 5MB
      if (file.size > 5 * 1024 * 1024) {
        return new Response("Plik za duży (max 5MB)", { status: 400 });
      }

      //  dozwolone typy
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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = emailMap[topic];

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
        ${file ? `<p><strong>Załącznik:</strong> ${file.name}</p>` : ""}
      `,
      attachments,
    });

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Error", { status: 500 });
  }
}
