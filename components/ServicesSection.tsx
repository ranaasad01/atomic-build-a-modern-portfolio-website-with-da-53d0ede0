"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  { key: "brand", number: "01", icon: "✦" },
  { key: "web", number: "02", icon: "◈" },
  { key: "motion", number: "03", icon: "⬡" },
  { key: "dev", number: "04", icon: "⟁" },
];

export default function ServicesSection() {
  const t = useTranslations();

  return (
    <section id="services" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:sticky md:top-28"
          >
            <span className="font-inter text-xs tracking-widest uppercase text-[#E8FF47] mb-4 block">
              {t("services.label")}
            </span>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-[#F0EDE8] tracking-tight leading-tight mb-6">
              {t("services.heading")}
            </h2>
            <p className="font-inter text-base text-[#6B6B6B] leading-relaxed max-w-sm">
              {t("services.subtext")}
            </p>

            {/* Tech stack pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {["LangChain", "LangGraph", "LlamaIndex", "OpenAI", "Azure ML", "Pinecone", "PyTorch", "FastAPI"].map((tech) => (
                <span
                  key={tech}
                  className="font-inter text-xs text-[#6B6B6B] border border-white/10 rounded-full px-3 py-1.5 bg-[#1A1A1A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: service list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col divide-y divide-white/8"
          >
            {services.map((svc) => (
              <motion.div
                key={svc.key}
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-5 py-8 group cursor-pointer"
              >
                <span className="font-inter text-xs text-[#6B6B6B] mt-1 w-6 shrink-0">{svc.number}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#E8FF47] text-lg leading-none">{svc.icon}</span>
                    <h3 className="font-syne font-bold text-lg text-[#F0EDE8] group-hover:text-[#E8FF47] transition-colors duration-200">
                      {t("services." + svc.key + ".title")}
                    </h3>
                  </div>
                  <p className="font-inter text-sm text-[#6B6B6B] leading-relaxed">
                    {t("services." + svc.key + ".desc")}
                  </p>
                </div>
                <div className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E8FF47]/40 group-hover:bg-[#E8FF47]/5 transition-all duration-200">
                  <span className="text-[#6B6B6B] group-hover:text-[#E8FF47] text-xs transition-colors duration-200">→</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
