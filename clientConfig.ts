// Re-export types and constants from types.ts for convenience
export { ALL_SLIDE_KEYS, SLIDE_LABELS } from './types';
export type { ClientConfig, SlideKey } from './types';

// Active config — FysioSupplies
import { metCrmPreset } from './presets/met-crm';
import { TEAM_MEMBERS } from './types';

export const config = {
  ...metCrmPreset,
  clientName: 'FysioSupplies',
  clientLogo: '/fysiosupplies-logo.png',
  clientBackgroundImage: '/bg-fysio.jpg',
  presentationTitle: 'Data-gedreven Groei',
  presentationSubtitle: 'Voordat we iets laten zien, zijn wij vooral benieuwd naar jullie. Want dit gesprek gaat over FysioSupplies — niet over ons.',

  crmSystem: 'HubSpot',
  erpSystem: 'Exact',
  hasCRM: true,

  branch: 'handel',
  hasResellers: false,
  clientTypeLabel: 'fysiotherapiepraktijken',

  welcomeQuestions: [
    'Als een praktijk al 3 maanden niets besteld heeft — krijgt iemand dan een signaal vanuit HubSpot?',
    'Kan HubSpot jullie vertellen welke klanten alleen tape bestellen, maar geen behandeltafels of apparatuur?',
    'Als Rutger morgen ziek is — wie pakt zijn klanten dan op met alle context en afspraken?',
  ],

  segments: [
    { icon: 'ShoppingBag' as const, label: 'Fysiotherapiepraktijken', sublabel: 'Solo, groepspraktijken, ketens' },
    { icon: 'Building2' as const, label: 'Revalidatiecentra & Ziekenhuizen', sublabel: 'Grotere instellingen, aanbestedingen' },
    { icon: 'Store' as const, label: 'Sportscholen & Fitnesscentra', sublabel: 'Sportmedisch, fitness, wellness' },
  ],

  newClientSteps: [
    { icon: 'Search' as const, text: 'Nieuwe praktijken identificeren via data — ICP op basis van bestelhistorie top-klanten' },
    { icon: 'Target' as const, text: 'Na vakbeurzen: leads automatisch in HubSpot, gestructureerde opvolging' },
    { icon: 'Mail' as const, text: 'Structurele marktbewerking: contactmomenten om van prospect een klant te maken' },
    { icon: 'Phone' as const, text: 'Accountmanagers krijgen wekelijks overzicht: nieuwe leads, opvolgtaken, pipeline-status' },
  ],

  repeatPurchaseText: 'Besteldata uit HubSpot en Exact koppelen aan slimme AI. Automatisch signaleren wanneer een praktijk afwijkt van het normale bestelpatroon — voordat ze bij de concurrent bestellen.',
  dataSourceLabel: 'HubSpot + Exact',

  approachPhases: [
    {
      title: 'Analyse',
      subtitle: 'Situatie in kaart brengen',
      items: [
        'Bestelpatronen en klantwaarde analyseren vanuit HubSpot & Exact',
        'Slapende klanten en cross-sell kansen identificeren',
        'Quick wins bepalen: pipeline, signalen, dashboards',
      ],
    },
    {
      title: 'Inrichting',
      subtitle: 'HubSpot optimaliseren',
      items: [
        'HubSpot koppelen aan Exact via API — besteldata syncen',
        'Pipeline inrichten: prospect → proefbestelling → vaste klant',
        'Automatische signalen bij wegvallende bestellers',
      ],
    },
    {
      title: 'Training',
      subtitle: 'Rutger en het salesteam',
      items: [
        'Praktisch op de werkvloer, met echte klanten',
        'Focus: dashboard lezen, opvolgtaken, cross-sell herkennen',
        'Geen IT-project — direct bruikbaar',
      ],
    },
    {
      title: 'Optimalisatie',
      subtitle: 'Continu verbeteren',
      items: [
        'Bestelpatronen monitoren en bijsturen',
        'Cross-sell triggers optimaliseren (tape → tafels, apparatuur)',
        'Beurs-ROI meten en opvolging verbeteren',
      ],
    },
  ],

  quoteAutomationSubtitle: 'Geautomatiseerd offerteproces voor fysiotherapiepraktijken en zorginstellingen',
  leadDistributionLabel: 'Per regio',

  presenter: TEAM_MEMBERS[3], // Migilio Tirtosentono
  package: 'full' as const,
  salesCount: 2,
};
