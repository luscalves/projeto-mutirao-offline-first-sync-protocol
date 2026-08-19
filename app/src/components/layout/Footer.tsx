import { StyleSheet, Text, View } from 'react-native';

import { colors, fontSize, spacing } from '../../theme/tokens';
import { PrimaryButton } from '../ui/PrimaryButton';

type FooterProps = {
  pendingOperations: number;
  lastSyncLabel: string;
  isSyncing: boolean;
  canSync: boolean;
  onSync: () => void;
};

/**
 * Rodapé fixo: concentra a ação principal (sincronizar o log local)
 * e o rastro da última convergência com o servidor.
 */
export function Footer({
  pendingOperations,
  lastSyncLabel,
  isSyncing,
  canSync,
  onSync,
}: FooterProps) {
  const hasPending = pendingOperations > 0;

  const buttonLabel = isSyncing
    ? 'Sincronizando…'
    : hasPending
      ? `Sincronizar ${pendingOperations} ${pendingOperations === 1 ? 'operação' : 'operações'}`
      : 'Tudo sincronizado';

  return (
    <View style={styles.container}>
      <PrimaryButton
        label={buttonLabel}
        onPress={onSync}
        loading={isSyncing}
        disabled={!canSync || !hasPending}
        accessibilityHint={
          canSync
            ? 'Envia as operações do log local para o servidor'
            : 'Indisponível sem conexão. As operações ficam salvas no dispositivo.'
        }
      />
      <Text style={styles.meta}>
        Última sincronização: {lastSyncLabel} · Mutirão v1.0.0
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  meta: {
    fontSize: fontSize.xs,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
