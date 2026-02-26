import React from 'react';
import { motion } from 'framer-motion';
import { Database, Bell, TrendingDown, FileText, Users, Euro, ArrowRight, TrendingUp } from 'lucide-react';

const HOURLY_RATE = 30; // €5000/maand ÷ 168 uur

const savings = [
  {
    icon: TrendingDown,
    task: 'Slapende klanten opsporen',
    before: 'Niet / op gevoel',
    after: 'Automatisch signaal',
    calculation: '10 slapende klanten × €5.000 gem. waarde',
    euroSaving: 50000,
    color: 'brand-green',
    isRevenue: true,
  },
  {
    icon: FileText,
    task: 'Offerte-opvolging',
    before: 'Hopen dat ze reageren',
    after: 'Signaal bij openen',
    calculation: '20% meer conversie × 200 offertes × €3.000',
    euroSaving: 120000,
    color: 'brand-accent',
    isRevenue: true,
  },
  {
    icon: Users,
    task: 'Administratie bijhouden',
    before: '30 min per dag handmatig',
    after: 'Real-time dashboard',
    calculation: '30 min × 220 dagen × €30/uur × 2 medewerkers',
    euroSaving: 220 * HOURLY_RATE,
    hours: 220,
    color: 'brand-pink',
    isRevenue: false,
  },
];

export const CRMPillar: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-gray-50 flex items-center">
      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-[50vw] h-full bg-brand-green/5 -skew-x-12 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-6"
            >
              <Database className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green font-bold text-xs uppercase tracking-wider">Pijler 1: CRM</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-black uppercase leading-none mb-6"
            >
              Hoeveel laat je
              <br />
              <span className="text-brand-green">op dit moment</span>
              <br />
              liggen?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              Gebaseerd op hoe de multinationals het doen — maar dan toepasbaar voor het MKB. Een CRM dat je team vertelt wat ze moeten doen, wanneer en bij wie.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-brand-green mt-1 shrink-0" />
                <p className="text-gray-600">Automatische <strong className="text-brand-purple">signalen</strong> bij kansen en risico's</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-brand-green mt-1 shrink-0" />
                <p className="text-gray-600">Inzicht in <strong className="text-brand-purple">omzet per medewerker</strong> en teamprestatie</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Business case calculations */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-brand-green font-bold text-sm uppercase tracking-wider mb-4"
            >
              Wat kost het om dit NIET te doen?
            </motion.p>

            <div className="space-y-4">
              {savings.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.task}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
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
                      <p className="text-brand-green font-black text-sm">
                        {item.isRevenue ? '+' : ''}€{item.euroSaving.toLocaleString('nl-NL')}/jaar
                      </p>
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
              className="mt-4 bg-brand-purple rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-brand-green" />
                <div>
                  <p className="text-white font-black text-sm uppercase">Geschatte impact</p>
                  <p className="text-white/50 text-xs">Omzet + besparing per jaar</p>
                </div>
              </div>
              <p className="text-brand-green font-black text-2xl">€{(savings.reduce((s, i) => s + i.euroSaving, 0)).toLocaleString('nl-NL')}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
