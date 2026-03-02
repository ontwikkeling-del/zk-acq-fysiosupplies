import React from 'react';
import { motion } from 'framer-motion';
import { Euro, ShieldCheck, TrendingUp, RotateCw, UserPlus, Zap, ArrowRight } from 'lucide-react';

const focusAreas = [
  {
    icon: ShieldCheck,
    title: 'Klantverloop voorkomen',
    description: 'Klanten behouden die nu ongemerkt weglopen',
    color: 'brand-green',
  },
  {
    icon: TrendingUp,
    title: 'Cross-sell',
    description: 'Meer producten per klant, hogere orderwaarde',
    color: 'brand-accent',
  },
  {
    icon: RotateCw,
    title: 'Herhalingsaankopen',
    description: 'Hogere bestelfrequentie bij bestaande klanten',
    color: 'brand-pink',
  },
  {
    icon: UserPlus,
    title: 'Nieuwe klanten',
    description: 'Data-gedreven acquisitie van nieuwe praktijken',
    color: 'brand-green',
  },
  {
    icon: Zap,
    title: 'Efficiëntie',
    description: 'Minder handwerk, meer tijd voor relaties',
    color: 'brand-yellow',
  },
];

export const ClientBusinessCase: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center justify-center">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
        >
          <Euro className="w-4 h-4 text-brand-green" />
          <span className="text-brand-green font-bold text-xs uppercase tracking-wider">De Potentie</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black uppercase leading-none text-white mb-6"
        >
          Waar ligt
          <br />
          <span className="text-brand-green">de ruimte?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-brand-green font-bold text-sm uppercase tracking-wider mb-5"
        >
          Hier gaan we op focussen
        </motion.p>

        <div className="space-y-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/[0.08] transition-all"
              >
                <div className={`w-10 h-10 bg-${area.color}/20 rounded-full flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 text-${area.color}`} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{area.title}</p>
                  <p className="text-white/40 text-xs">{area.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 shrink-0 ml-auto" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-5 bg-brand-green/10 border border-brand-green/20 rounded-xl p-4 text-center"
        >
          <p className="text-brand-green font-bold text-sm">Concrete cijfers volgen verderop</p>
          <p className="text-white/30 text-xs">Na de uitdieping van onze aanpak</p>
        </motion.div>
      </div>
    </section>
  );
};
