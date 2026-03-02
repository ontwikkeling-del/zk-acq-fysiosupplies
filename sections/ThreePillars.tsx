import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, GraduationCap, ArrowRight, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Database,
    num: '01',
    title: 'CRM',
    subtitle: 'Haal meer uit je team',
    description: 'Door CRM-trainingen haalt het team het maximale uit het systeem.',
    stats: ['Signalen', 'Pipeline', 'Segmentatie'],
    color: 'brand-green',
    gradient: 'from-brand-green/20 to-brand-green/5',
  },
  {
    icon: Zap,
    num: '02',
    title: 'AI & Automatisering',
    subtitle: 'Maak tijd vrij voor sales',
    description: 'Herhalende werkzaamheden worden geautomatiseerd; hierdoor bespaar je tijd.',
    stats: ['Flows', 'Verrijking', 'Scoring'],
    color: 'brand-accent',
    gradient: 'from-brand-accent/20 to-brand-accent/5',
  },
  {
    icon: GraduationCap,
    num: '03',
    title: 'Training',
    subtitle: 'Vertrouwen & adoptie',
    description: 'Door structurele sales-trainingen verhogen we de conversie en adoptie.',
    stats: ['On-site', 'Coaching', 'Strategie'],
    color: 'brand-pink',
    gradient: 'from-brand-pink/20 to-brand-pink/5',
  },
];

export const ThreePillars: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-brand-purple">
      {/* Background effects */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[130px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-green font-bold text-sm uppercase tracking-wider mb-3 text-center"
        >
          Wat wij doen
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black uppercase leading-tight mb-3 text-center text-white"
        >
          Drie pijlers, <span className="text-brand-green">één resultaat</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-white/40 text-sm text-center mb-10 max-w-2xl mx-auto"
        >
          Door mens en techniek samen aan te pakken, verhogen we het rendement.
        </motion.p>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15, type: 'spring', damping: 20 }}
                className="relative group"
              >
                {/* Card */}
                <div className={`bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.12] transition-all duration-300 h-full`}>
                  {/* Number + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-${pillar.color}/30 font-black text-4xl`}>{pillar.num}</span>
                    <div className={`w-12 h-12 bg-${pillar.color}/15 rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${pillar.color}`} />
                    </div>
                  </div>

                  {/* Title + subtitle */}
                  <h3 className={`text-${pillar.color} font-black text-xl uppercase mb-1`}>{pillar.title}</h3>
                  <p className="text-white/50 text-xs mb-4">{pillar.subtitle}</p>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-5">{pillar.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {pillar.stats.map((stat) => (
                      <span
                        key={stat}
                        className={`text-${pillar.color} bg-${pillar.color}/10 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full`}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow connector (between cards) */}
                {index < 2 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-white/40" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Result bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-brand-green/10 border border-brand-green/20 rounded-xl px-6 py-3 flex items-center justify-center gap-3"
        >
          <TrendingUp className="w-5 h-5 text-brand-green" />
          <p className="text-white font-bold text-sm">
            Samen = <span className="text-brand-green">meer omzet per medewerker eruit</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
