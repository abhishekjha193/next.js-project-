"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, Calendar } from "lucide-react";
import { certificates } from "@/lib/data";
import { Certificate } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CertificatesSection() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <SectionWrapper id="certificates">
      <div className="mb-12">
        <p className="section-label mb-3">Credentials</p>
        <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
          Certificates
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -3, scale: 1.01 }}
            onClick={() => setSelected(cert)}
            className="glass card-glow rounded-2xl p-5 flex items-start gap-4 cursor-pointer transition-all group"
          >
            {/* Badge */}
            <div
              className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${cert.badgeColor}`}
            >
              <Award size={18} className="text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>
                {cert.title}
              </h3>
              <p className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
                {cert.issuer}
              </p>
              <div className="flex items-center gap-1 mt-2 text-xs" style={{ color: "var(--text-tertiary)" }}>
                <Calendar size={10} />
                {cert.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed z-[110] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md glass-strong rounded-3xl p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 p-1.5 rounded-xl glass"
                style={{ color: "var(--text-tertiary)" }}
              >
                <X size={16} />
              </button>

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${selected.badgeColor} mb-6`}>
                <Award size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold mb-2 pr-8" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                {selected.title}
              </h3>
              <p className="text-sm mb-1" style={{ color: "var(--text-secondary)" }}>{selected.issuer}</p>
              <p className="text-xs mb-6" style={{ color: "var(--text-tertiary)" }}>{selected.date}</p>

              {selected.credentialUrl && (
                <a
                  href={selected.credentialUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:scale-105"
                  style={{ background: "var(--accent)" }}
                >
                  <ExternalLink size={14} />
                  View Credential
                </a>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
