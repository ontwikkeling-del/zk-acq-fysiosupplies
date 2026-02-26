import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users, Phone, Package, Building2, UserX } from 'lucide-react';

const bullets = [
  { icon: Phone, text: '"Wij benaderen eigenlijk niet" — klanten vinden ons', color: 'brand-accent' },
  { icon: Users, text: '2 accountmanagers binnendienst (buitendienst afgeschaft)', color: 'brand-accent' },
  { icon: Package, text: '12.000+ producten: van €3 tape tot €35.000 apparatuur — geen segmentatie', color: 'brand-accent' },
  { icon: Building2, text: 'Onderdeel Asker Healthcare (beursgenoteerd, €1,4 mrd omzet)', color: 'brand-accent' },
];

export const ClientSituation: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-gray-50 flex items-center">
      {/* Warm accent background shape */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-[45vw] h-full bg-brand-accent/5 skew-x-6 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Current situation */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full px-4 py-1.5 mb-6"
            >
              <AlertTriangle className="w-4 h-4 text-brand-accent" />
              <span className="text-brand-accent font-bold text-xs uppercase tracking-wider">Huidige Situatie</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-black uppercase leading-none mb-8"
            >
              FysioSupplies
              <br />
              <span className="text-brand-accent">vandaag</span>
            </motion.h2>

            <div className="space-y-4">
              {bullets.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-brand-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-brand-accent" />
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
            >
              <p className="text-red-600 font-bold text-sm">~10 klantenservice-medewerkers = primaire contactlijn</p>
              <p className="text-red-400 text-xs mt-1">Geen proactieve sales, geen signalen bij weglopende klanten</p>
            </motion.div>
          </div>

          {/* Right - Anecdote card */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white border-2 border-brand-accent/20 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
                  <UserX className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-brand-purple font-black text-lg">Rutger Beusenberg</p>
                  <p className="text-gray-500 text-sm">5 fysiotherapiepraktijken — Groningen</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-4">
                  <p className="text-brand-green font-bold text-xs uppercase mb-1">Vroeger</p>
                  <p className="text-gray-700 text-sm">"In het verleden bestelde ik daar wel."</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-500 font-bold text-xs uppercase mb-1">Nu</p>
                  <p className="text-gray-700 text-sm">"Inmiddels niet meer."</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="mt-5 bg-brand-purple/5 border border-brand-purple/10 rounded-xl p-4"
              >
                <p className="text-brand-purple font-black text-sm uppercase mb-1">Het kernprobleem</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Klanten vallen weg zonder dat iemand het opmerkt. Geen signaal, geen opvolging, geen tweede kans.
                </p>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center mt-4 text-brand-accent font-bold text-sm italic"
            >
              "Hoeveel Rutgers zijn er nog meer?"
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
