"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, X, CheckCircle, ArrowRight } from "lucide-react";
import { certificates } from "@/lib/data";
import { Certificate } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CertificatesSection() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <SectionWrapper id="certificates">

      <div className="mb-12">
        <p className="section-label mb-3">Credentials</p>

        <h2 className="text-4xl font-bold text-black dark:text-white">
          Certificates
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {visibleCertificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.05,
              duration: 0.5,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(cert)}
            className="
              cursor-pointer
              rounded-2xl p-5
              bg-white dark:bg-white/5
              border border-gray-200 dark:border-white/10
              hover:border-gray-300 dark:hover:border-white/20
              backdrop-blur-xl
              transition-all
              group
            "
          >
            <div className="flex items-start gap-4">

              <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${cert.badgeColor}`}>
                <Award size={18} className="text-gray-300" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-black dark:text-white truncate">
                  {cert.title}
                </h3>

                <p className="text-xs text-gray-600 dark:text-white/60 mt-1">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-white/40">
                  <Calendar size={10} />
                  {cert.date}
                </div>
              </div>

              <CheckCircle size={14} className="text-green-500 opacity-60 group-hover:opacity-100 transition" />
            </div>
          </motion.div>
        ))}

      </div>

      {/* VIEW MORE */}
      {!showAll && certificates.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="
              flex items-center gap-2
              px-5 py-2.5
              rounded-xl
              bg-white dark:bg-white/5
              border border-gray-200 dark:border-white/10
              text-black dark:text-white/70
              hover:bg-gray-100 dark:hover:bg-white/10
              transition-all
              text-sm
            "
          >
            View More
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* MODAL */}
      <AnimatePresence mode="wait">
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 dark:bg-black/80 backdrop-blur-xl"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 18,
                }}
                className="
                  w-full max-w-lg
                  rounded-3xl
                  bg-white dark:bg-white/10
                  border border-gray-200 dark:border-white/10
                  backdrop-blur-2xl
                  shadow-xl
                  overflow-hidden
                "
              >

                <div className="p-6 border-b border-gray-200 dark:border-white/10 relative">

                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 flex items-center justify-center"
                  >
                    <X size={16} className="text-black dark:text-white/70" />
                  </button>

                  <div className="flex items-center gap-3">

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${selected.badgeColor}`}>
                      <Award size={22} className="text-gray-300" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        {selected.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-600 dark:text-white/60">
                          {selected.issuer}
                        </span>

                        <span className="flex items-center gap-1 text-xs text-green-500">
                          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                          Verified
                        </span>
                      </div>
                    </div>

                  </div>

                  <p className="text-xs text-gray-500 dark:text-white/40 mt-3 flex items-center gap-1">
                    <Calendar size={12} />
                    {selected.date}
                  </p>
                </div>

                <div className="p-6">
                  <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black/30">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-sm text-gray-700 dark:text-white/70 mt-5 leading-relaxed">
                    Verified certification demonstrating real-world skills and project implementation expertise.
                  </p>

                </div>

              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </SectionWrapper>
  );
}

