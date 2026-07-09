"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const testimonials = [
  {
    quote: "testimonials.q1",
    author: "testimonials.a1",
    role: "testimonials.r1",
    avatar: "https://i.ytimg.com/vi/bUzfX-KPd_c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB-AiO4a4t2zEI-_ahnpnVHApwmag",
  },
  {
    quote: "testimonials.q2",
    author: "testimonials.a2",
    role: "testimonials.r2",
    avatar: "https://i.ytimg.com/vi/en7k_1-TfhM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPdSiRAsVQu7vN-BFGtICARQBPjw",
  },
  {
    quote: "testimonials.q3",
    author: "testimonials.a3",
    role: "testimonials.r3",
    avatar: "https://i.ytimg.com/vi/VijYidr0Mvk/maxresdefault.jpg",
  },
];

export default function TestimonialsSection() {
  const t = useTranslations();

  return (
    <section className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <span className="font-inter text-xs tracking-widest uppercase text-[#E8FF47] mb-3 block">
            {t("testimonials.label")}
          </span>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-[#F0EDE8] tracking-tight text-balance">
            {t("testimonials.heading")}
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] border border-white/6 rounded-2xl p-7 flex flex-col gap-5 shadow-[0_2px_4px_rgba(0,0,0,0.15),0_12px_32px_-8px_rgba(0,0,0,0.35)]"
            >
              <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed flex-1 text-pretty">
                &ldquo;{t(item.quote)}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                <img
                  src={item.avatar}
                  alt={t(item.author)}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <p className="font-syne font-semibold text-sm text-[#F0EDE8]">{t(item.author)}</p>
                  <p className="font-inter text-xs text-[#6B6B6B]">{t(item.role)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
