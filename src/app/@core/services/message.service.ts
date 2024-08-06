import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Message, MessageStatus } from '../models/message.model';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = 'http://localhost:5000/api/messages';
  private messages: Message[] = [];
  private messagesSubject = new BehaviorSubject<Message[]>(this.messages);

  messages$ = this.messagesSubject.asObservable();

  constructor(
    private http: HttpClient,
  ) {}

  getMessages(): void {
    this.http.get<Message[]>(this.apiUrl).subscribe(
      data => this.messagesSubject.next(data),
      error => console.error('Error fetching messages', error)
    );
  }

  sendMessage(message: Message): void {
    this.http.post<Message>(this.apiUrl, message).subscribe(
      newMessage => {
        this.messagesSubject.next([...this.messagesSubject.value, newMessage]);
      },
      error => console.error('Error sending message', error)
    );
  }

  createMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }

  updateMessageStatus(id: string, status: MessageStatus): void {
    const messages = this.messagesSubject.value;
    const message = messages.find(m => m._id === id);
    if (message) {
      message.status = status;
      this.messagesSubject.next([...messages]);
    }
  }

  deleteMessage(id: string | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const messages = this.messagesSubject.value.filter(message => message._id !== id);
        this.messagesSubject.next(messages);
      })
    );
  }

  archiveMessage(id: string | undefined): Observable<Message> {
    return this.http.patch<Message>(`${this.apiUrl}/archive/${id}`, {}).pipe(
      tap(updatedMessage => {
        const messages = this.messagesSubject.value.map(message =>
          message._id === id ? updatedMessage : message
        );
        this.messagesSubject.next(messages);
      })
    );
  }
}
