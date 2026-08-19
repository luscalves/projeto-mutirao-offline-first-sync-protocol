import { StyleSheet, Text, View } from 'react-native';

import { colors, fontSize, radius, spacing } from '../../theme/tokens';

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger';

type BadgeProps = {
  label: string;
  tone?: BadgeTone;
};

const toneStyles: Record<BadgeTone, { background: string; foreground: string }> = {
  neutral: { background: colors.surfaceMuted, foreground: colors.textMuted },
  success: { background: colors.successSoft, foreground: colors.success },
  warning: { background: colors.warningSoft, foreground: colors.warning },
  danger: { background: colors.dangerSoft, foreground: colors.danger },
};

/** Etiqueta compacta usada para sinalizar status (sincronizado, pendente, conflito). */
export function Badge({ label, tone = 'neutral' }: BadgeProps) {
  const { background, foreground } = toneStyles[tone];

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={[styles.label, { color: foreground }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
  },
  label: {
    fontSize: fontSize.xs,
    fontWeight: '700',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
});
