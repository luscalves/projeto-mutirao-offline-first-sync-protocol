import type { ReactNode } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import { colors } from '../../theme/tokens';

type ScreenProps = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

/**
 * Esqueleto de layout compartilhado: header fixo, body flexível e footer fixo.
 * Isola aqui o tratamento de área segura para que as telas não repitam essa lógica.
 */
export function Screen({ header, children, footer }: ScreenProps) {
  return (
    <View style={[styles.container, { paddingTop: topInset, paddingBottom: bottomInset }]}>
      {header}
      {children}
      {footer}
    </View>
  );
}

// Com edge-to-edge habilitado no Android, o conteúdo desenha sob as barras do sistema.
const topInset = Platform.select({
  android: StatusBar.currentHeight ?? 24,
  ios: 48,
  default: 0,
});

const bottomInset = Platform.select({ android: 16, ios: 24, default: 0 });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
});
