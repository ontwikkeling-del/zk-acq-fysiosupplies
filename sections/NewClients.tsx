import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, Target, Mail, Phone, ArrowRight } from 'lucide-react';
import { config } from '../clientConfig';
import { resolveTemplate } from '../types';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Search, Target, Mail, Phone,
};

const phases = ['Actief opvolgen', 'Slapende klanten', 'Voller maken', 'Nieuwe klanten'];

export const NewClients: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-white">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[130px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Timeline indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-2 mb-8 justify-center"
        >
          {phases.map((phase, i) => (
            <React.Fragment key={phase}>
              <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                i === 3
                  ? 'bg-brand-purple text-white'
                  : 'bg-brand-green/20 text-brand-green'
              }`}>
                {phase}
              </div>
              {i < phases.length - 1 && <ArrowRight className="w-3 h-3 text-gray-300 shrink-0" />}
            </React.Fragment>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block bg-brand-purple/10 border border-brand-purple/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-brand-purple font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                <UserPlus className="w-3.5 h-3.5" /> Fase 4
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6 text-brand-purple"
            >
              Aantrekken nieuwe{' '}
              <span className="text-brand-green">{config.clientTypeLabel || 'zakelijke klanten'}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-base leading-relaxed"
            >
              Pas als je fundament staat, ga je actief nieuwe klanten werven. Data-gedreven acquisitie met bewezen aanpak.
            </motion.p>
          </div>

          <div className="space-y-4">
            {config.newClientSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Search;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white shadow-sm border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:border-brand-green/30 transition-all"
                >
                  <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{resolveTemplate(step.text, config)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
