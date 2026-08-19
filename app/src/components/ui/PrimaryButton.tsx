import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

import { colors, fontSize, radius, spacing } from '../../theme/tokens';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  accessibilityHint?: string;
};

/** Botão de ação principal da tela. */
export function PrimaryButton({
  label,
  onPress,
  disabled = false,
  loading = false,
  accessibilityHint,
}: PrimaryButtonProps) {
  const isBlocked = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isBlocked}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: isBlocked, busy: loading }}
      style={({ pressed }) => [
        styles.container,
        pressed && !isBlocked && styles.containerPressed,
        isBlocked && styles.containerDisabled,
      ]}
    >
      {loading ? <ActivityIndicator color={colors.textInverse} size="small" /> : null}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    // Alvo de toque confortável para uso em campo, com uma mão.
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
  },
  containerPressed: {
    backgroundColor: colors.primaryDark,
  },
  containerDisabled: {
    opacity: 0.5,
  },
  label: {
    color: colors.textInverse,
    fontSize: fontSize.md,
    fontWeight: '700',
  },
});
