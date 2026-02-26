import React from 'react';
import { motion } from 'framer-motion';
import { Database, Bell, TrendingUp, UserPlus, ArrowRight } from 'lucide-react';

const phases = [
  {
    phase: 'Fase 1',
    icon: Database,
    title: 'CRM actief opvolgen',
    description: 'Pipeline structureren, signalen instellen, proactief opvolgen in plaats van reactief wachten',
    color: 'brand-green',
    timeline: 'Maand 1-3',
  },
  {
    phase: 'Fase 2',
    icon: Bell,
    title: 'Slapende klanten activeren',
    description: 'Automatische signalen bij afwijkend bestelpatroon, win-back campagnes, relatieonderhoud',
    color: 'brand-accent',
    timeline: 'Maand 2-5',
  },
  {
    phase: 'Fase 3',
    icon: TrendingUp,
    title: 'Klanten voller maken',
    description: 'Cross-sell kansen identificeren, herhalingsflows, LTV verhogen per klantsegment',
    color: 'brand-pink',
    timeline: 'Maand 4-8',
  },
  {
    phase: 'Fase 4',
    icon: UserPlus,
    title: 'Nieuwe klanten aantrekken',
    description: 'Data-gedreven outreach, lead scoring, geautomatiseerde acquisitie op basis van ICP',
    color: 'brand-purple',
    timeline: 'Maand 6-12',
  },
];

export const B2BValue: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-[#f8f5ff]">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[130px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-4"
          >
            <Database className="w-4 h-4 text-brand-green" />
            <span className="text-brand-green font-bold text-xs uppercase tracking-wider">Stap voor stap</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black uppercase leading-tight mb-3 text-brand-purple"
          >
            4 fases naar <span className="text-brand-green">meer omzet</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm max-w-2xl mx-auto"
          >
            Elke fase bouwt voort op de vorige. Geen losse acties, maar een doorlopende strategie die compound groeit.
          </motion.p>
        </div>

        {/* 4-fase grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.12 }}
                className="bg-white shadow-sm border border-gray-100 rounded-2xl p-5 relative"
              >
                <div className={`w-10 h-10 bg-${phase.color}/10 rounded-full flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 text-${phase.color}`} />
                </div>

                <div className={`inline-block bg-${phase.color}/10 rounded-full px-3 py-1 mb-3`}>
                  <span className={`text-${phase.color} font-bold text-[10px] uppercase`}>{phase.phase} — {phase.timeline}</span>
                </div>

                <h3 className={`text-${phase.color} font-black text-sm uppercase mb-2`}>{phase.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{phase.description}</p>

                {index < phases.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center mt-6 text-brand-green font-bold text-sm"
        >
          Elke fase levert direct resultaat — en bouwt voort op de vorige
        </motion.p>
      </div>
    </section>
  );
};
