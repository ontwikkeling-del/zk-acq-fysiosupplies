import React, { createContext, useContext, useState, type ReactNode } from 'react';

// FysioSupplies defaults — pre-filled estimates
const DEFAULTS = {
  // Klantbehoud
  actieveKlanten: 2000,
  gemJaaromzet: 1800,
  huidigChurn: 12,
  verbeterdChurn: 8,
  // Nieuwe klanten
  extraNieuweKlanten: 25,
  gemEersteJaaromzet: 1500,
  // Cross-sell & upsell
  crossSellKlanten: 300,
  extraOmzetPerKlant: 500,
  // Tijdsbesparing
  urenPerWeek: 12,
  uurtarief: 35,
};

type Inputs = typeof DEFAULTS;

interface BusinessCaseTotals {
  klantbehoud: number;
  nieuweKlanten: number;
  crossSell: number;
  efficientie: number;
  total: number;
}

interface BusinessCaseContextType {
  inputs: Inputs;
  setInput: <K extends keyof Inputs>(key: K, value: number) => void;
  totals: BusinessCaseTotals;
}

const BusinessCaseContext = createContext<BusinessCaseContextType | null>(null);

export const useBusinessCase = () => {
  const ctx = useContext(BusinessCaseContext);
  if (!ctx) throw new Error('useBusinessCase must be used within BusinessCaseProvider');
  return ctx;
};

export const BusinessCaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);

  const setInput = <K extends keyof Inputs>(key: K, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const klantbehoud = Math.max(0, inputs.actieveKlanten * inputs.gemJaaromzet * ((inputs.huidigChurn - inputs.verbeterdChurn) / 100));
  const nieuweKlanten = inputs.extraNieuweKlanten * inputs.gemEersteJaaromzet;
  const crossSell = inputs.crossSellKlanten * inputs.extraOmzetPerKlant;
  const efficientie = inputs.urenPerWeek * 52 * inputs.uurtarief;
  const total = klantbehoud + nieuweKlanten + crossSell + efficientie;

  return (
    <BusinessCaseContext.Provider value={{
      inputs,
      setInput,
      totals: { klantbehoud, nieuweKlanten, crossSell, efficientie, total },
    }}>
      {children}
    </BusinessCaseContext.Provider>
  );
};
