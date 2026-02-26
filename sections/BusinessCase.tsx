import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, GraduationCap, TrendingUp, Calculator, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Database,
    title: 'CRM',
    color: 'brand-green',
    items: [
      { label: 'Slapende klanten opsporen', amount: 50000, detail: '5% reactivatie × 200 klanten × €500' },
      { label: 'Offerte-opvolging', amount: 120000, detail: '5% meer conversie × €2,4M pipeline' },
      { label: 'Administratie bijhouden', amount: 6600, detail: '30 min/dag × 220 dgn × €30/u × 2 AM' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'Training',
    color: 'brand-pink',
    items: [
      { label: 'CRM productiviteit', amount: 12000, detail: '10% productiviteitswinst × 2 AM × €60K' },
      { label: 'Sales conversie verhogen', amount: 40000, detail: '2% conversie × 1.000 leads × €2K' },
      { label: 'LTV door cross-sell', amount: 90000, detail: '5% cross-sell × 600 klanten × €3K' },
    ],
  },
  {
    icon: Zap,
    title: 'AI & Automatisering',
    color: 'brand-accent',
    items: [
      { label: 'Klantonderzoek automatiseren', amount: 17610, detail: '4 min × 20/dag × 220 dgn × 2 AM × €30/u' },
      { label: 'Data kopiëren elimineren', amount: 6600, detail: '30 min/dag × 220 dgn × 2 AM × €30/u' },
      { label: 'Offertes sneller opmaken', amount: 2880, detail: '15 min × 384 offertes × €30/u' },
    ],
  },
];

const aiTrajectories = [
  { month: 'Mnd 1', label: 'Orderverwerking', saving: 4800 },
  { month: 'Mnd 2', label: 'Klantherkenning', saving: 3600 },
  { month: 'Mnd 3', label: 'Data verrijking', saving: 3200 },
  { month: 'Mnd 4', label: 'Lead scoring', saving: 2800 },
  { month: 'Mnd 5', label: 'Opvolgtaken', saving: 2400 },
  { month: 'Mnd 6', label: 'Campagne flows', saving: 2000 },
  { month: 'Mnd 7', label: 'Rapportage', saving: 1800 },
  { month: 'Mnd 8', label: 'Gespreksanalyse', saving: 1500 },
  { month: 'Mnd 9', label: 'Offerte-tracking', saving: 1200 },
];

const aiTotal = aiTrajectories.reduce((sum, t) => sum + t.saving, 0);
const grandTotal = pillars.reduce((sum, p) => sum + p.items.reduce((s, i) => s + i.amount, 0), 0);
const combinedTotal = grandTotal + aiTotal;

export const BusinessCase: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-[#f8f5ff] flex items-center">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[130px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full px-4 py-1.5 mb-4"
        >
          <Calculator className="w-4 h-4 text-brand-purple" />
          <span className="text-brand-purple font-bold text-xs uppercase tracking-wider">Totaaloverzicht</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black uppercase leading-tight mb-2 text-brand-purple"
        >
          De complete <span className="text-brand-green">business case</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-sm mb-5 max-w-2xl"
        >
          Alle drie pijlers + 9 AI-trajecten — geschatte jaarlijkse impact op basis van jullie cijfers.
        </motion.p>

        {/* Three pillar summaries */}
        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {pillars.map((pillar, pIndex) => {
            const Icon = pillar.icon;
            const pillarTotal = pillar.items.reduce((s, i) => s + i.amount, 0);
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + pIndex * 0.12 }}
                className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 bg-${pillar.color}/10 rounded-full flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 text-${pillar.color}`} />
                  </div>
                  <h3 className={`text-${pillar.color} font-black text-xs uppercase`}>{pillar.title}</h3>
                </div>

                <div className="space-y-1.5 mb-3">
                  {pillar.items.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-[11px]">{item.label}</p>
                        <p className="text-brand-purple font-bold text-[11px]">€{item.amount.toLocaleString('nl-NL')}</p>
                      </div>
                      <p className="text-gray-400 text-[9px] italic">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <div className={`bg-${pillar.color}/10 rounded-lg px-3 py-2 flex items-center justify-between`}>
                  <p className={`text-${pillar.color} font-bold text-[10px] uppercase`}>Subtotaal</p>
                  <p className={`text-${pillar.color} font-black text-base`}>€{pillarTotal.toLocaleString('nl-NL')}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Trajectories extra savings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white border border-brand-accent/20 rounded-2xl p-4 shadow-sm mb-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <p className="text-brand-accent font-black text-xs uppercase">Extra: 9 AI-trajecten in 12 maanden</p>
            </div>
            <div className="bg-brand-accent/10 rounded-full px-3 py-1">
              <p className="text-brand-accent font-black text-sm">+€{aiTotal.toLocaleString('nl-NL')}/jaar</p>
            </div>
          </div>
          <div className="flex gap-1.5">
            {aiTrajectories.map((t, i) => (
              <div key={t.month} className="flex-1 text-center">
                <div
                  className="bg-brand-accent/15 rounded-md mb-1 mx-auto flex items-end justify-center"
                  style={{ height: '40px' }}
                >
                  <div
                    className="w-full bg-brand-accent/30 rounded-md"
                    style={{ height: `${(t.saving / 4800) * 100}%` }}
                  />
                </div>
                <p className="text-brand-accent font-bold text-[8px]">€{(t.saving / 1000).toFixed(1)}K</p>
                <p className="text-gray-400 text-[7px] leading-tight">{t.label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-[9px] mt-2 italic">
            Besparing per traject neemt af naarmate de grootste tijdverliezen al zijn geëlimineerd.
          </p>
        </motion.div>

        {/* Grand total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-brand-purple rounded-2xl p-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-brand-green" />
            </div>
            <div>
              <p className="text-white font-black text-lg uppercase">Geschatte totale impact</p>
              <p className="text-white/50 text-xs">3 pijlers + 9 AI-trajecten — omzet + besparing per jaar</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-brand-green font-black text-3xl md:text-4xl">€{combinedTotal.toLocaleString('nl-NL')}</p>
            <p className="text-white/40 text-xs">per jaar</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
