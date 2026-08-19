import type { ConnectionStatus, OperationLogEntry } from '../types';

/**
 * Dados estáticos apenas para a camada visual.
 * Serão substituídos por consultas ao log de operações no SQLite (Drizzle),
 * mantendo a mesma forma de dados que os componentes já consomem.
 */

export const agent = {
  name: 'Ana Souza',
  microArea: 'UBS Vila Nova · Microárea 07',
} as const;

export const connection: ConnectionStatus = 'offline';

export const lastSyncLabel = 'hoje, 07h12';

export const dailySummary: {
  visitsToday: number;
  families: number;
  pendingOperations: number;
} = {
  visitsToday: 8,
  families: 132,
  pendingOperations: 5,
};

export const recentOperations: OperationLogEntry[] = [
  { id: 'op-1', label: 'Cadastro de Maria da Silva', kind: 'cadastro', time: '10h42', status: 'pending' },
  { id: 'op-2', label: 'Visita — Rua das Acácias, 120', kind: 'visita', time: '10h05', status: 'pending' },
  { id: 'op-3', label: 'Atualização de telefone — João P.', kind: 'atualizacao', time: '09h31', status: 'pending' },
  { id: 'op-4', label: 'Visita — Rua do Campo, 45', kind: 'visita', time: '08h58', status: 'synced' },
  { id: 'op-5', label: 'Cadastro de Rafael Antunes', kind: 'cadastro', time: '08h20', status: 'synced' },
];
