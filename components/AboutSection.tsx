"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const skills = [
  { category: "LLM & GenAI", items: ["GPT-4", "Claude", "Llama 3", "Mistral", "LoRA Fine-tuning"] },
  { category: "Frameworks", items: ["LangChain", "LangGraph", "LlamaIndex", "AutoGen", "Haystack"] },
  { category: "Infrastructure", items: ["Azure ML", "Docker", "FastAPI", "PostgreSQL", "Pinecone"] },
  { category: "ML & CV", items: ["PyTorch", "YOLOv8", "Hugging Face", "scikit-learn", "OpenCV"] },
];

export default function AboutSection() {
  const t = useTranslations();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top: split layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          {/* Left: skill grid */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-[#111111] border border-white/6 rounded-2xl p-5 shadow-[0_2px_4px_rgba(0,0,0,0.2),0_8px_24px_-4px_rgba(0,0,0,0.4)]"
              >
                <p className="font-syne font-bold text-xs text-[#E8FF47] mb-3 uppercase tracking-wider">
                  {group.category}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="font-inter text-xs text-[#6B6B6B] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#E8FF47]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Right: copy */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            <span className="font-inter text-xs tracking-widest uppercase text-[#E8FF47]">
              {t("about.label")}
            </span>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-[#F0EDE8] tracking-tight leading-tight">
              {t("about.heading")}
            </h2>
            <p className="font-inter text-base text-[#6B6B6B] leading-relaxed">
              {t("about.para1")}
            </p>
            <p className="font-inter text-base text-[#6B6B6B] leading-relaxed">
              {t("about.para2")}
            </p>
            <div className="flex gap-6 pt-2">
              {[
                { value: "3.5+", label: t("about.stat1") },
                { value: "8+", label: t("about.stat2") },
                { value: "98%", label: t("about.stat3") },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-syne font-bold text-3xl text-[#E8FF47]">{s.value}</span>
                  <span className="font-inter text-xs text-[#6B6B6B]">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience timeline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8"
        >
          <h3 className="font-syne font-bold text-2xl text-[#F0EDE8] mb-1">{t("about.team_heading")}</h3>
          <p className="font-inter text-sm text-[#6B6B6B]">{t("about.team_sub")}</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {[
            { year: "2021–Now", role: "Sr AI/ML Engineer", company: "Datics AI", desc: "Leading AI product development — 8+ enterprise products shipped using LLMs, RAG, and multi-agent systems." },
            { year: "2020–2021", role: "ML Engineer", company: "Freelance", desc: "Delivered computer vision and NLP solutions for clients across fintech, healthcare, and e-commerce verticals." },
            { year: "2019–2020", role: "Data Scientist", company: "Research Lab", desc: "Published research on transformer architectures and contributed to open-source NLP tooling." },
          ].map((exp) => (
            <motion.div
              key={exp.year}
              variants={fadeInUp}
              className="bg-[#111111] border border-white/6 rounded-2xl p-6 shadow-[0_2px_4px_rgba(0,0,0,0.2),0_8px_24px_-4px_rgba(0,0,0,0.35)]"
            >
              <span className="font-inter text-xs text-[#E8FF47] mb-2 block">{exp.year}</span>
              <p className="font-syne font-bold text-base text-[#F0EDE8] mb-0.5">{exp.role}</p>
              <p className="font-inter text-xs text-[#6B6B6B] mb-3">{exp.company}</p>
              <p className="font-inter text-sm text-[#6B6B6B] leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
