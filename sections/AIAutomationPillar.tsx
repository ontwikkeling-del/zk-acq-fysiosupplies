import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Search, Copy, FileText, Euro, ArrowRight, TrendingUp, Landmark, Sparkles } from 'lucide-react';

const HOURLY_RATE = 30; // €5000/maand ÷ 168 uur

const timeSavings = [
  {
    icon: Search,
    task: 'Klantonderzoek voor gesprek',
    before: '5 min per klant',
    after: '1 min (automatisch)',
    calculation: '4 min × 20 klanten/dag × 220 dagen × 2 AM',
    hours: 587,
    color: 'brand-green',
  },
  {
    icon: Copy,
    task: 'Data kopiëren tussen systemen',
    before: '30 min per dag',
    after: '0 min (automatisch)',
    calculation: '30 min × 220 werkdagen × 2 medewerkers',
    hours: 220,
    color: 'brand-accent',
  },
  {
    icon: FileText,
    task: 'Offerte opmaken',
    before: '15 min per offerte',
    after: '3 min per offerte',
    calculation: '12 min × 10 offertes/week × 48 weken',
    hours: 96,
    color: 'brand-pink',
  },
];

const totalHours = timeSavings.reduce((sum, s) => sum + s.hours, 0);
const totalEuro = totalHours * HOURLY_RATE;

const months = [
  { month: 'Maand 1', title: 'Basis automatisering', desc: 'Orderverwerking & klantherkenning' },
  { month: 'Maand 2', title: 'Data verrijking', desc: 'AI bedrijfsprofielen & contactverrijking' },
  { month: 'Maand 3', title: 'Slimme taken', desc: 'Automatische opvolgtaken voor sales' },
  { month: 'Maand 4-6', title: 'Uitbreiden', desc: 'Flows, campagnes & lead scoring' },
  { month: 'Maand 7-9', title: 'Optimaliseren', desc: 'Data-analyse & bijsturing op ROI' },
  { month: 'Maand 10-12', title: 'Schalen', desc: 'Nieuwe modules & volle automatisering' },
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

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left - Monthly roadmap */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full px-4 py-1.5 mb-6"
            >
              <Zap className="w-4 h-4 text-brand-accent" />
              <span className="text-brand-accent font-bold text-xs uppercase tracking-wider">Pijler 2: AI & Automatisering</span>
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

            {/* Monthly roadmap */}
            <div className="space-y-2.5">
              {months.map((m, index) => (
                <motion.div
                  key={m.month}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-auto min-w-[68px] h-9 bg-brand-accent/10 border border-brand-accent/20 rounded-full flex items-center justify-center shrink-0 px-3">
                    <span className="text-brand-accent font-black text-[10px] whitespace-nowrap">{m.month}</span>
                  </div>
                  <div className="flex-1 bg-white border border-gray-100 rounded-xl px-3 py-2.5">
                    <p className="text-brand-purple font-bold text-sm">{m.title}</p>
                    <p className="text-gray-400 text-[11px]">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Subsidie blok */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-4 bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl p-4 flex items-start gap-3"
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
          </div>

          {/* Right - Time/money savings calculations */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-brand-accent font-bold text-sm uppercase tracking-wider mb-4"
            >
              Wat doen jullie medewerkers nu handmatig?
            </motion.p>

            <div className="space-y-3">
              {timeSavings.map((item, index) => {
                const Icon = item.icon;
                const saving = item.hours * HOURLY_RATE;
                return (
                  <motion.div
                    key={item.task}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 bg-${item.color}/10 rounded-full flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 text-${item.color}`} />
                      </div>
                      <p className="text-brand-purple font-bold text-sm">{item.task}</p>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-1 bg-red-50 border border-red-100 rounded-lg px-3 py-2 text-center">
                        <p className="text-red-400 font-bold text-xs">Nu</p>
                        <p className="text-gray-600 text-sm font-medium">{item.before}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-brand-green shrink-0" />
                      <div className="flex-1 bg-brand-green/10 border border-brand-green/20 rounded-lg px-3 py-2 text-center">
                        <p className="text-brand-green font-bold text-xs">Straks</p>
                        <p className="text-gray-600 text-sm font-medium">{item.after}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Euro className="w-3 h-3 text-brand-green shrink-0" />
                        <p className="text-gray-500 text-xs">{item.calculation}</p>
                      </div>
                      <p className="text-brand-green font-black text-sm">€{saving.toLocaleString('nl-NL')}/jaar</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Total */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-3 bg-brand-purple rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-brand-green" />
                <div>
                  <p className="text-white font-black text-sm uppercase">Totale besparing</p>
                  <p className="text-white/50 text-xs">Totaal per jaar (2 medewerkers, €{HOURLY_RATE}/uur)</p>
                </div>
              </div>
              <p className="text-brand-green font-black text-2xl">€{totalEuro.toLocaleString('nl-NL')}</p>
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
        </div>
      </div>
    </section>
  );
};
