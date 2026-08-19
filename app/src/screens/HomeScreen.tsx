import { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Body } from '../components/layout/Body';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Screen } from '../components/layout/Screen';
import { ActionButton } from '../components/ui/ActionButton';
import { Card } from '../components/ui/Card';
import { OperationItem } from '../components/ui/OperationItem';
import { StatTile } from '../components/ui/StatTile';
import {
  agent,
  connection,
  dailySummary,
  lastSyncLabel,
  recentOperations,
} from '../data/mockDashboard';
import { colors, fontSize, spacing } from '../theme/tokens';

/** Tela inicial do Agente Comunitário de Saúde. */
export function HomeScreen() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [pendingOperations, setPendingOperations] = useState(dailySummary.pendingOperations);

  // Placeholder da sincronização: será trocado pela chamada real ao protocolo (HLC + CRDTs).
  useEffect(() => {
    if (!isSyncing) {
      return;
    }

    const timer = setTimeout(() => {
      setPendingOperations(0);
      setIsSyncing(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [isSyncing]);

  const handleSync = useCallback(() => setIsSyncing(true), []);

  const operations = useMemo(
    () =>
      pendingOperations === 0
        ? recentOperations.map((operation) => ({ ...operation, status: 'synced' as const }))
        : recentOperations,
    [pendingOperations],
  );

  const isOnline = connection === 'online';

  return (
    <Screen
      header={<Header agentName={agent.name} microArea={agent.microArea} connection={connection} />}
      footer={
        <Footer
          pendingOperations={pendingOperations}
          lastSyncLabel={lastSyncLabel}
          isSyncing={isSyncing}
          canSync={isOnline}
          onSync={handleSync}
        />
      }
    >
      <Body>
        <Card title="Estado da sincronização">
          <Text style={styles.paragraph}>
            {isOnline
              ? 'Conexão disponível. Envie as operações registradas para o servidor.'
              : 'Sem conexão. Os registros continuam sendo gravados no log local e serão enviados assim que houver rede.'}
          </Text>
          <View style={styles.stats}>
            <StatTile value={dailySummary.visitsToday} label="Visitas hoje" />
            <StatTile value={dailySummary.families} label="Famílias na área" />
            <StatTile value={pendingOperations} label="Operações pendentes" highlighted={pendingOperations > 0} />
          </View>
        </Card>

        <Card title="Ações rápidas">
          <ActionButton
            icon="🧍"
            label="Novo cadastro"
            hint="Registrar um novo cidadão da microárea"
            onPress={noop}
          />
          <ActionButton
            icon="🏠"
            label="Registrar visita"
            hint="Anotar uma visita domiciliar realizada"
            onPress={noop}
          />
          <ActionButton
            icon="📋"
            label="Fila de operações"
            hint="Ver o log local aguardando sincronização"
            onPress={noop}
          />
        </Card>

        <Card title="Últimos registros">
          {operations.map((operation, index) => (
            <View key={operation.id} style={index > 0 && styles.divider}>
              <OperationItem operation={operation} />
            </View>
          ))}
        </Card>
      </Body>
    </Screen>
  );
}

/** Navegação ainda não implementada nesta etapa da interface. */
function noop() {}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: fontSize.sm,
    lineHeight: 20,
    color: colors.textMuted,
  },
  stats: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
