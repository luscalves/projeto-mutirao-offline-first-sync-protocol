/** Tipos compartilhados pela camada de apresentação. */

/** Estado da conectividade do dispositivo com o servidor de sincronização. */
export type ConnectionStatus = 'online' | 'offline';

/** Situação de uma operação dentro do log local (append-only). */
export type OperationStatus = 'pending' | 'synced' | 'conflict';

/**
 * Entrada do Log de Operações exibida na tela.
 * Reflete, em formato de leitura, o registro imutável persistido no SQLite.
 */
export type OperationLogEntry = {
  id: string;
  /** Descrição legível da operação (ex.: "Cadastro de Maria da Silva"). */
  label: string;
  /** Tipo da operação registrada no log. */
  kind: 'cadastro' | 'visita' | 'atualizacao';
  /** Horário local formatado para exibição. */
  time: string;
  status: OperationStatus;
};
