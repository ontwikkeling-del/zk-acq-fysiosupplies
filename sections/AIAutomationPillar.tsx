import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Landmark, Sparkles } from 'lucide-react';

const topics = [
  { month: 'Maand 1', title: 'Basis automatisering', desc: 'Orderverwerking & klantherkenning' },
  { month: 'Maand 2', title: 'Data verrijking', desc: 'AI bedrijfsprofielen & contactverrijking' },
  { month: 'Maand 3', title: 'Slimme taken', desc: 'Automatische opvolgtaken voor sales' },
  { month: 'Maand 4', title: 'Uitbreiden', desc: 'Flows & campagnes' },
  { month: 'Maand 5', title: 'Optimaliseren', desc: 'Data-analyse & bijsturing op ROI' },
  { month: 'Maand 6', title: 'Schalen', desc: 'Nieuwe modules & volle automatisering' },
];

export const AIAutomationPillar: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-gray-50 flex items-center">
      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-[50vw] h-full bg-brand-accent/5 -skew-x-12 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-3 bg-brand-accent/10 border-2 border-brand-accent/30 rounded-full px-6 py-3 mb-6"
        >
          <Zap className="w-6 h-6 text-brand-accent" />
          <span className="text-brand-accent font-black text-lg uppercase tracking-wider">Pijler 2: AI & Automatisering</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black uppercase leading-none mb-4"
        >
          Elke maand
          <br />
          <span className="text-brand-accent">verdient zich</span>
          <br />
          terug
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-sm mb-6 max-w-md"
        >
          We implementeren stap voor stap. Elke maand een nieuwe automatisering die direct geld bespaart.
        </motion.p>

        {/* Monthly roadmap with month labels */}
        <div className="space-y-2.5">
          {topics.map((t, index) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="w-20 shrink-0">
                <span className="text-brand-accent font-black text-xs uppercase">{t.month}</span>
              </div>
              <div className="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-2.5">
                <p className="text-brand-purple font-bold text-sm">{t.title}</p>
                <p className="text-gray-400 text-[11px]">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subsidie blok */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-5 bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl p-4 flex items-start gap-3"
        >
          <Landmark className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
          <div>
            <p className="text-brand-purple font-bold text-sm mb-1">Subsidie mogelijkheden</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              AI-trajecten komen vaak in aanmerking voor <strong>WBSO</strong>, <strong>MIT</strong> of <strong>KIA</strong> subsidie.
              Wij helpen bij het identificeren van mogelijkheden — kan tot 30-40% van de investering dekken.
            </p>
          </div>
        </motion.div>

        {/* Business case highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-3 bg-brand-green/10 border border-brand-green/20 rounded-xl p-3 flex items-center gap-3"
        >
          <Sparkles className="w-5 h-5 text-brand-green shrink-0" />
          <p className="text-gray-600 text-xs">
            <strong className="text-brand-green">Elke maand een nieuw AI-traject</strong> — in 12 maanden 9+ automatiseringen die samen meer besparen dan de investering.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
