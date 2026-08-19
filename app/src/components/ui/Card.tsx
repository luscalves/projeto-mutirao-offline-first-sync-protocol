import type { ReactNode } from 'react';
import { StyleSheet, Text, View, type ViewStyle } from 'react-native';

import { colors, fontSize, radius, spacing } from '../../theme/tokens';

type CardProps = {
  title?: string;
  children: ReactNode;
  style?: ViewStyle;
};

/** Superfície padrão para agrupar conteúdo relacionado dentro do body. */
export function Card({ title, children, style }: CardProps) {
  return (
    <View style={[styles.container, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.md,
  },
  title: {
    fontSize: fontSize.md,
    fontWeight: '700',
    color: colors.text,
  },
});
