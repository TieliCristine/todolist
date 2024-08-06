export enum MessageStatus {
  Normal = 'normal',
  Arquivado = 'arquivado',
  Deleted = 'deleted',
}

export interface Message {
  /* O id deve ser opcional, pois é gerado automaticamente pelo MongoDB
  *  O campo timestamp deve ser opcional, pois pode ser gerado automaticamente no backend */

  _id?: string;
  text: string;
  title: string;
  sender: string;
  receiver: string;
  timestamp?: Date;
  status: MessageStatus;
}
