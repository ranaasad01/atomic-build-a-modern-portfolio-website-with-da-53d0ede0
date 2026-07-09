"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, ArrowRight } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ContactSection() {
  const t = useTranslations();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeInUp} className="font-inter text-xs tracking-widest uppercase text-[#E8FF47]">
              {t("contact.label")}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-syne font-extrabold text-4xl md:text-5xl text-[#F0EDE8] tracking-tight leading-tight text-balance"
            >
              {t("contact.heading")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-inter text-base text-[#6B6B6B] leading-relaxed text-pretty max-w-sm">
              {t("contact.subtext")}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-[#E8FF47]/10 border border-[#E8FF47]/20 flex items-center justify-center">
                <Mail size={16} className="text-[#E8FF47]" />
              </div>
              <a
                href="mailto:hello@luminarystudio.co"
                className="font-inter text-sm text-[#F0EDE8] hover:text-[#E8FF47] transition-colors duration-200"
              >
                hello@luminarystudio.co
              </a>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img
                src="https://cdn.coworkingcafe.com/images/10782813-3E25-4EB9-8C9A-2819E19E8AC3/3544.jpg?width=288"
                alt="Luminary Studio office"
                className="rounded-2xl w-full h-52 object-cover border border-white/6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] mt-4"
              />
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {sent ? (
              <div className="bg-[#111111] border border-[#E8FF47]/20 rounded-2xl p-10 text-center">
                <p className="font-syne font-bold text-2xl text-[#E8FF47] mb-2">{t("contact.success_title")}</p>
                <p className="font-inter text-sm text-[#6B6B6B]">{t("contact.success_sub")}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111111] border border-white/6 rounded-2xl p-8 flex flex-col gap-5 shadow-[0_2px_4px_rgba(0,0,0,0.2),0_16px_48px_-8px_rgba(0,0,0,0.4)]"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs text-[#6B6B6B]">{t("contact.field_name")}</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder={t("contact.placeholder_name")}
                    className="bg-[#1A1A1A] border border-white/8 rounded-xl px-4 py-3 font-inter text-sm text-[#F0EDE8] placeholder-[#6B6B6B] focus:outline-none focus:border-[#E8FF47]/40 transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs text-[#6B6B6B]">{t("contact.field_email")}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={t("contact.placeholder_email")}
                    className="bg-[#1A1A1A] border border-white/8 rounded-xl px-4 py-3 font-inter text-sm text-[#F0EDE8] placeholder-[#6B6B6B] focus:outline-none focus:border-[#E8FF47]/40 transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs text-[#6B6B6B]">{t("contact.field_message")}</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder={t("contact.placeholder_message")}
                    className="bg-[#1A1A1A] border border-white/8 rounded-xl px-4 py-3 font-inter text-sm text-[#F0EDE8] placeholder-[#6B6B6B] focus:outline-none focus:border-[#E8FF47]/40 transition-colors duration-200 resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#E8FF47] text-[#0A0A0A] font-inter font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#C8DF2A] transition-colors duration-200 group"
                >
                  {t("contact.submit")}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
