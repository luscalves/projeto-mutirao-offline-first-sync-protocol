import { StyleSheet, Text, View } from 'react-native';

import { colors, fontSize, radius, spacing } from '../../theme/tokens';
import type { ConnectionStatus } from '../../types';
import { Badge } from '../ui/Badge';

type HeaderProps = {
  agentName: string;
  microArea: string;
  connection: ConnectionStatus;
};

/**
 * Cabeçalho fixo da tela: identifica o agente e comunica, de imediato,
 * se o dispositivo está conectado — informação crítica em um app offline-first.
 */
export function Header({ agentName, microArea, connection }: HeaderProps) {
  const isOnline = connection === 'online';
  const initials = getInitials(agentName);

  return (
    <View style={styles.container} accessibilityRole="header">
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <View style={styles.identity}>
        <Text style={styles.greeting}>Olá, {agentName.split(' ')[0]}</Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {microArea}
        </Text>
      </View>

      <Badge label={isOnline ? 'Online' : 'Offline'} tone={isOnline ? 'success' : 'warning'} />
    </View>
  );
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.textInverse,
    fontSize: fontSize.md,
    fontWeight: '700',
  },
  identity: {
    flex: 1,
    gap: 2,
  },
  greeting: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
});
