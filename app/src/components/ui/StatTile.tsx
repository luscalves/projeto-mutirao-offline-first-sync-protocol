import { StyleSheet, Text, View } from 'react-native';

import { colors, fontSize, radius, spacing } from '../../theme/tokens';

type StatTileProps = {
  value: number | string;
  label: string;
  /** Destaca o número quando o dado exige atenção do agente (ex.: pendências). */
  highlighted?: boolean;
};

/** Indicador numérico curto usado na visão geral do dia. */
export function StatTile({ value, label, highlighted = false }: StatTileProps) {
  return (
    <View
      style={styles.container}
      accessible
      accessibilityRole="text"
      accessibilityLabel={`${value} ${label}`}
    >
      <Text style={[styles.value, highlighted && styles.valueHighlighted]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    gap: spacing.xs,
  },
  value: {
    fontSize: fontSize.xxl,
    fontWeight: '700',
    color: colors.text,
  },
  valueHighlighted: {
    color: colors.warning,
  },
  label: {
    fontSize: fontSize.xs,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
