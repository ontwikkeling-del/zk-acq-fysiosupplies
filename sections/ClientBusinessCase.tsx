import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, UserPlus } from 'lucide-react';

export const ClientBusinessCase: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center justify-center">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-black uppercase leading-none text-white mb-12"
        >
          Verhoog de waarde van
          <br />
          <span className="text-brand-green">jouw B2B-klanten</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative bg-white/10 border border-white/20 rounded-2xl p-8"
          >
            <div className="w-14 h-14 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-5">
              <TrendingUp className="w-7 h-7 text-brand-green" />
            </div>
            <h3 className="text-brand-green font-black text-xl uppercase mb-3">Maximize lifetime value</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Haal meer uit bestaande klanten door cross-sell, herhalingsaankopen en proactief klantbehoud
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative bg-white/10 border border-white/20 rounded-2xl p-8"
          >
            <div className="w-14 h-14 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-5">
              <UserPlus className="w-7 h-7 text-brand-accent" />
            </div>
            <h3 className="text-brand-accent font-black text-xl uppercase mb-3">Nieuwe klanten aantrekken</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Data-gedreven acquisitie van waardevolle nieuwe klanten op basis van jullie ideale klantprofiel
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/40 text-sm mt-10"
        >
          Dit is de kern van alles wat we doen
        </motion.p>
      </div>
    </section>
  );
};
