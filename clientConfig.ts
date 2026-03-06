// Re-export types and constants from types.ts for convenience
export { ALL_SLIDE_KEYS, SLIDE_LABELS } from './types';
export type { ClientConfig, SlideKey } from './types';

// Active config — FysioSupplies (geen CRM)
import { zonderCrmPreset } from './presets/zonder-crm';
import { TEAM_MEMBERS } from './types';

export const config = {
  ...zonderCrmPreset,
  clientName: 'FysioSupplies',
  clientLogo: '/fysiosupplies-logo.jpg',
  clientBackgroundImage: '',
  presentationTitle: 'Data-gedreven Groei',
  presentationSubtitle: 'Voordat we iets laten zien, zijn wij vooral benieuwd naar jullie. Want dit gesprek gaat over FysioSupplies — niet over ons.',

  crmSystem: 'HubSpot',
  erpSystem: 'MS Dynamics Business Central',
  hasCRM: false,

  branch: 'handel',
  hasResellers: false,
  clientTypeLabel: 'fysiotherapiepraktijken',

  welcomeQuestions: [
    'Van de bijna 47.000 klanten in 3 jaar koopt 70% maar één keer — hoe proberen jullie die terug te krijgen?',
    'Als een praktijk stopt met bestellen — merkt iemand dat op, of gaat dat op gevoel?',
    'Jullie directe verkoop is €1,7M — welk deel daarvan zou hoger kunnen als sales meer inzicht had?',
  ],

  segments: [
    { icon: 'ShoppingBag' as const, label: 'Fysiotherapiepraktijken', sublabel: 'Solo, groepspraktijken, ketens' },
    { icon: 'Building2' as const, label: 'Revalidatiecentra & Ziekenhuizen', sublabel: 'Grotere instellingen, aanbestedingen' },
    { icon: 'Store' as const, label: 'Sportscholen & Fitnesscentra', sublabel: 'Sportmedisch, fitness, wellness' },
  ],

  newClientSteps: [
    { icon: 'Search' as const, text: 'Van de 32.586 eenmalige kopers: wie heeft het potentieel om terugkerende klant te worden?' },
    { icon: 'Target' as const, text: 'Na vakbeurzen: leads automatisch in HubSpot, gestructureerde opvolging' },
    { icon: 'Mail' as const, text: 'Structurele marktbewerking: contactmomenten om van prospect een vaste klant te maken' },
    { icon: 'Phone' as const, text: 'Binnendienst krijgt wekelijks overzicht: heractivatie-kansen, opvolgtaken, pipeline-status' },
  ],

  repeatPurchaseText: 'Besteldata uit MS Dynamics Business Central koppelen aan HubSpot en slimme AI. Automatisch signaleren wanneer een praktijk afwijkt van het normale bestelpatroon — voordat ze bij de concurrent bestellen.',
  dataSourceLabel: 'MS Dynamics BC',

  approachPhases: [
    {
      title: 'Analyse',
      subtitle: 'Situatie in kaart brengen',
      items: [
        'Bestelpatronen en klantwaarde analyseren vanuit Business Central',
        '32.586 eenmalige kopers segmenteren: wie is heractiveerbaar?',
        'Quick wins bepalen: herhaalaankoop-signalen, cross-sell kansen',
      ],
    },
    {
      title: 'HubSpot Implementatie',
      subtitle: 'CRM inrichten naast Business Central',
      items: [
        'HubSpot inrichten: pipelines, properties, dashboards',
        'Koppeling met Business Central — besteldata syncen',
        'Automatische signalen bij wegvallende bestellers',
      ],
    },
    {
      title: 'Training',
      subtitle: 'Jeroen en het salesteam',
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
        'Herhaalaankoop-ratio verhogen: van 30% naar 40%+',
      ],
    },
  ],

  quoteAutomationSubtitle: 'Geautomatiseerd offerteproces voor fysiotherapiepraktijken en zorginstellingen',
  leadDistributionLabel: 'Per regio',

  presenter: TEAM_MEMBERS[0], // Erwin Dijkstra
  package: 'full' as const,
  salesCount: 2,
};
