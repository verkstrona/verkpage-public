"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("ContactPage");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const formData = new FormData(e.currentTarget);

    const body = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      topic: data.get("topic"),
      company: data.get("company"), // honeypot
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      // body: JSON.stringify(body),
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setStatus(t("formStatusOk"));
      form.reset();
    } else {
      setStatus(t("formStatusError"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 contact-form">
      <input
        name="name"
        placeholder={t("formName")}
        required
        className="bg-white"
      />
      <input
        name="email"
        type="email"
        placeholder={t("formMail")}
        required
        className="bg-white"
      />

      <select name="topic" required className="py-2 cursor-pointer">
        <option value="">{t("formTopicTitle")}</option>
        <option value="detaliczne">{t("formTopic1")}</option>
        <option value="hurtowe">{t("formTopic2")}</option>
        <option value="reklamacja">{t("formTopic3")}</option>
        <option value="zwrot">{t("formTopic4")}</option>
        <option value="inne">{t("formTopic5")}</option>
      </select>

      <textarea
        name="message"
        placeholder={t("formMessage")}
        minLength={11}
        required
        className="bg-white"
      />
      <div className="p-4">
        {/* 🔴 ukryty input */}
        <input
          type="file"
          name="file"
          id="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setFileName(file ? file.name : "");
          }}
        />

        {/* 🟢 custom button */}
        <label
          htmlFor="file"
          className="cursor-pointer bg-gray-400 px-4 py-2 rounded"
        >
          {t("formFileButton")}
        </label>

        {/* 📎 nazwa pliku */}
        <p className=" mt-1">{fileName || t("formFilePlaceholder")}</p>
        <p className="contact-hint text-gray-300">{t("formFileHint")}</p>
      </div>

      {/* 🛑 honeypot */}
      <input type="text" name="company" style={{ display: "none" }} />

      <div className="flex items-start gap-2 text-sm py-2">
        <input
          type="checkbox"
          id="consent"
          required
          className=" accent-green-600"
        />
        <label htmlFor="consent" className="leading-tight">
          {t("formCheck1")}{" "}
          <a href="/polityka-prywatnosci" className="underline" target="_blank">
            {t("formCheck2")}
          </a>
          .
        </label>
      </div>

      <button disabled={loading} className="btn-secondary cursor-pointer">
        {loading ? t("formSending") : t("formSend")}
      </button>

      {status && <p>{status}</p>}
    </form>
  );
}
