import { MessageStatus } from '../enum/message-status.enum';

export interface Message {
  _id?: string;
  text: string;
  title: string;
  sender: string;
  receiver: string;
  timestamp?: Date;
  status: MessageStatus;
}
