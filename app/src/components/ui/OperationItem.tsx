import { StyleSheet, Text, View } from 'react-native';

import { colors, fontSize, spacing } from '../../theme/tokens';
import type { OperationLogEntry, OperationStatus } from '../../types';
import { Badge, type BadgeTone } from './Badge';

const statusPresentation: Record<OperationStatus, { label: string; tone: BadgeTone }> = {
  pending: { label: 'Pendente', tone: 'warning' },
  synced: { label: 'Sincronizado', tone: 'success' },
  conflict: { label: 'Conflito', tone: 'danger' },
};

const kindIcon: Record<OperationLogEntry['kind'], string> = {
  cadastro: '🧍',
  visita: '🏠',
  atualizacao: '✏️',
};

type OperationItemProps = {
  operation: OperationLogEntry;
};

/** Linha do log de operações: o que foi registrado e se já convergiu com o servidor. */
export function OperationItem({ operation }: OperationItemProps) {
  const { label, tone } = statusPresentation[operation.status];

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{kindIcon[operation.kind]}</Text>
      <View style={styles.texts}>
        <Text style={styles.label} numberOfLines={1}>
          {operation.label}
        </Text>
        <Text style={styles.time}>{operation.time}</Text>
      </View>
      <Badge label={label} tone={tone} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.sm,
  },
  icon: {
    fontSize: fontSize.lg,
  },
  texts: {
    flex: 1,
    gap: 2,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: '600',
    color: colors.text,
  },
  time: {
    fontSize: fontSize.xs,
    color: colors.textMuted,
  },
});
