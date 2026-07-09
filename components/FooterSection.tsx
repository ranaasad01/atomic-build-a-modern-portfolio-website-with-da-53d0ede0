"use client";

import { useTranslations } from "next-intl";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export default function FooterSection() {
  const t = useTranslations();

  const links = [
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const socials: Array<{ icon: LucideIcon; href: string; label: string }> = [
    { icon: Github, href: "https://github.com/", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  ];

  return (
    <footer className="bg-[#111111] border-t border-white/6 py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#" className="font-syne font-extrabold text-xl text-[#F0EDE8] tracking-tight">
              Hassan<span className="text-[#E8FF47]">.</span>
            </a>
            <p className="font-inter text-sm text-[#6B6B6B] leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <p className="font-inter text-xs tracking-widest uppercase text-[#6B6B6B] mb-1">
              {t("footer.links_label")}
            </p>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm text-[#6B6B6B] hover:text-[#F0EDE8] transition-colors duration-200 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="font-inter text-xs tracking-widest uppercase text-[#6B6B6B] mb-1">
              {t("footer.social_label")}
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#6B6B6B] hover:text-[#E8FF47] hover:border-[#E8FF47]/30 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/6 pt-6">
          <p className="font-inter text-xs text-[#6B6B6B] text-center">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
