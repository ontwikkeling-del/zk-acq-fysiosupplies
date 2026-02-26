// Re-export types and constants from types.ts for convenience
export { ALL_SLIDE_KEYS, SLIDE_LABELS } from './types';
export type { ClientConfig, SlideKey } from './types';

// Active config — import from preset and override as needed
import { metCrmPreset } from './presets/met-crm';
export const config = { ...metCrmPreset };
