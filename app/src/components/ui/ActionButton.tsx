import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontSize, radius, spacing } from '../../theme/tokens';

type ActionButtonProps = {
  icon: string;
  label: string;
  hint: string;
  onPress: () => void;
};

/** Atalho para as tarefas mais frequentes do agente em campo. */
export function ActionButton({ icon, label, hint, onPress }: ActionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={hint}
      style={({ pressed }) => [styles.container, pressed && styles.containerPressed]}
    >
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.texts}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.hint}>{hint}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  containerPressed: {
    backgroundColor: colors.primarySoft,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primarySoft,
  },
  icon: {
    fontSize: fontSize.lg,
  },
  texts: {
    flex: 1,
    gap: 2,
  },
  label: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.text,
  },
  hint: {
    fontSize: fontSize.xs,
    color: colors.textMuted,
  },
  chevron: {
    fontSize: fontSize.xl,
    color: colors.textMuted,
  },
});
