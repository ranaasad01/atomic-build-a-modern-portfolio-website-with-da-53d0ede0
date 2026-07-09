"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut", delay: 0.4 } },
};

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#E8FF47]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 text-xs font-inter font-medium tracking-widest uppercase text-[#E8FF47] border border-[#E8FF47]/30 rounded-full px-4 py-1.5 w-fit"
            >
              {t("hero.badge")}
            </motion.span>

            <motion.h1
              variants={item}
              className="font-syne font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F0EDE8]"
            >
              {t("hero.headline1")}
              <br />
              <span className="text-[#E8FF47]">{t("hero.headline2")}</span>
              <br />
              <span className="text-3xl md:text-4xl font-inter font-light text-[#A0A0A0]">{t("hero.headline3")}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="font-inter text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-md"
            >
              {t("hero.subtext")}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-[#E8FF47] text-[#0A0A0A] font-inter font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#C8DF2A] transition-all duration-300"
              >
                {t("hero.cta_primary")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/15 text-[#F0EDE8] font-inter font-medium text-sm px-6 py-3 rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                {t("hero.cta_secondary")}
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-8 pt-4 border-t border-white/8">
              {[
                { value: "3.5+", label: t("hero.stat1") },
                { value: "8+", label: t("hero.stat2") },
                { value: "70%", label: t("hero.stat3") },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-syne font-bold text-2xl text-[#F0EDE8]">{stat.value}</span>
                  <span className="font-inter text-xs text-[#6B6B6B]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#111111] shadow-[0_2px_4px_rgba(0,0,0,0.3),0_32px_80px_-16px_rgba(0,0,0,0.6)]">
              {/* Code / terminal visual */}
              <div className="p-6 md:p-8 min-h-[420px] flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
                  <span className="ml-3 font-inter text-xs text-[#6B6B6B]">rag_pipeline.py</span>
                </div>
                <pre className="font-mono text-xs md:text-sm text-[#A0A0A0] leading-relaxed overflow-hidden flex-1">
                  <span className="text-[#E8FF47]">from</span>{" "}
                  <span className="text-[#7DD3FC]">langchain</span>{" "}
                  <span className="text-[#E8FF47]">import</span> RAG{"\n\n"}
                  <span className="text-[#6B6B6B]"># Build production RAG pipeline</span>{"\n"}
                  pipeline <span className="text-[#E8FF47]">=</span> RAG({"\n"}
                  {"  "}retriever<span className="text-[#E8FF47]">=</span>
                  <span className="text-[#7DD3FC]">VectorStore</span>(){"\n"}
                  {"  "}llm<span className="text-[#E8FF47]">=</span>
                  <span className="text-[#7DD3FC]">GPT4</span>(){"\n"}
                  {"  "}memory<span className="text-[#E8FF47]">=</span>
                  <span className="text-[#7DD3FC]">ConversationBuffer</span>(){"\n"}
                  ){"\n\n"}
                  <span className="text-[#6B6B6B]"># Deploy to Azure ML</span>{"\n"}
                  pipeline<span className="text-[#E8FF47]">.</span>
                  <span className="text-[#7DD3FC]">deploy</span>(){"\n"}
                  <span className="text-[#28CA41]">✓ Serving 10k req/day</span>
                </pre>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#111111] border border-white/10 rounded-xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <p className="font-syne font-bold text-lg text-[#E8FF47]">2024</p>
              <p className="font-inter text-xs text-[#6B6B6B]">{t("hero.award")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
