"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const projects = [
  {
    id: "01",
    title: "Enterprise RAG Platform",
    category: "LLM · RAG · Azure",
    desc: "Built a multi-tenant RAG system processing 50k+ documents daily with hybrid retrieval, achieving 92% answer accuracy for a Fortune 500 client.",
    tags: ["LangChain", "Pinecone", "GPT-4", "Azure"],
  },
  {
    id: "02",
    title: "Multi-Agent Workflow Engine",
    category: "LangGraph · Agents",
    desc: "Designed an autonomous agent system that orchestrates 12 specialized sub-agents to automate complex business workflows end-to-end.",
    tags: ["LangGraph", "AutoGen", "FastAPI"],
  },
  {
    id: "03",
    title: "Computer Vision QA System",
    category: "CV · MLOps",
    desc: "Deployed a real-time defect detection pipeline using YOLOv8 and Azure ML, reducing manual QA time by 70% in manufacturing.",
    tags: ["YOLOv8", "PyTorch", "Azure ML"],
  },
  {
    id: "04",
    title: "AI-Powered Document Intelligence",
    category: "NLP · LlamaIndex",
    desc: "Created an intelligent document processing system that extracts, classifies, and summarizes legal contracts with 95% field-level accuracy.",
    tags: ["LlamaIndex", "OpenAI", "PostgreSQL"],
  },
];

export default function WorkSection() {
  const t = useTranslations();

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="font-inter text-xs tracking-widest uppercase text-[#E8FF47] mb-3 block">
              {t("work.label")}
            </span>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-[#F0EDE8] tracking-tight">
              {t("work.heading")}
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-inter text-sm text-[#6B6B6B] hover:text-[#F0EDE8] transition-colors duration-200"
          >
            {t("work.view_all")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={"group relative rounded-2xl border border-white/6 bg-[#111111] p-7 flex flex-col gap-4 cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.2),0_12px_32px_-8px_rgba(0,0,0,0.4)] hover:border-[#E8FF47]/20 transition-all duration-300" + (i === 0 ? " md:col-span-2" : "")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-inter text-xs text-[#E8FF47] mb-1 block">{project.category}</span>
                  <h3 className="font-syne font-bold text-xl text-[#F0EDE8] group-hover:text-[#E8FF47] transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <span className="font-syne font-bold text-4xl text-white/5 group-hover:text-[#E8FF47]/10 transition-colors duration-300 shrink-0">
                  {project.id}
                </span>
              </div>
              <p className="font-inter text-sm text-[#6B6B6B] leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-inter text-xs text-[#6B6B6B] border border-white/8 rounded-full px-3 py-1 bg-[#1A1A1A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
