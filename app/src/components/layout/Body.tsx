import type { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { colors, spacing } from '../../theme/tokens';

type BodyProps = {
  children: ReactNode;
};

/**
 * Área de conteúdo da tela: ocupa o espaço restante entre header e footer
 * e é a única região rolável, mantendo as âncoras de navegação sempre visíveis.
 */
export function Body({ children }: BodyProps) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
    paddingBottom: spacing.xxl,
  },
});
