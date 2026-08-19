/**
 * Design tokens do Projeto Mutirão.
 * Centralizar cores, espaçamentos e tipografia evita valores mágicos espalhados
 * pelos componentes e mantém a identidade visual consistente entre as telas.
 */

export const colors = {
  background: '#F1F5F9',
  surface: '#FFFFFF',
  surfaceMuted: '#F8FAFC',

  primary: '#0F766E',
  primaryDark: '#115E59',
  primarySoft: '#CCFBF1',

  text: '#0F172A',
  textMuted: '#64748B',
  textInverse: '#FFFFFF',

  border: '#E2E8F0',

  success: '#15803D',
  successSoft: '#DCFCE7',
  warning: '#B45309',
  warningSoft: '#FEF3C7',
  danger: '#B91C1C',
  dangerSoft: '#FEE2E2',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const fontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 18,
  xl: 22,
  xxl: 28,
} as const;
