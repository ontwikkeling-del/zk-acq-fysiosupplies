import React from 'react';
import { motion } from 'framer-motion';

export const CaseStudyWovar: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-brand-purple">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] bg-brand-green/5 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-3 text-center"
        >
          Klantverhaal
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black uppercase leading-tight mb-2 text-center text-white"
        >
          Wovar: van reactief naar{' '}
          <span className="text-brand-green">proactief</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-white/50 text-sm text-center mb-8 max-w-2xl mx-auto"
        >
          Van online schroeven verkopen naar internationale B2B-webshop met €30M+ omzet
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-3xl mx-auto mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source
                src="https://jdwzwoxuntwdmfqvlejt.supabase.co/storage/v1/object/public/videos//ZWARTEKRAAI_WOVAR_FINAL_SUBS.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </motion.div>

        {/* KPIs - simple row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-6"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-brand-green font-black text-3xl mb-1">2x</p>
            <p className="text-white/50 text-xs uppercase">B2B omzet</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-brand-accent font-black text-3xl mb-1">+39,5%</p>
            <p className="text-white/50 text-xs uppercase">herhaalaankopen</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-brand-pink font-black text-3xl mb-1">12</p>
            <p className="text-white/50 text-xs uppercase">maanden</p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-white/60 text-sm italic max-w-xl mx-auto">
            "Onze salesmedewerkers weten nu precies wat ze moeten doen, hoe ze klanten moeten benaderen en op welk moment."
          </p>
          <p className="text-white/30 text-xs mt-2">— Jesse Keizer, Wovar</p>
        </motion.div>
      </div>
    </section>
  );
};
