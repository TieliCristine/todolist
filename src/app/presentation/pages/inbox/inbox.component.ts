import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, Observable } from "rxjs";
import { AsyncPipe, DatePipe, NgForOf } from "@angular/common";
import { Router, RouterOutlet } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

import { MessageService } from "../../../@core/services/message.service";
import { Message, MessageStatus } from "../../../@core/models/message.model";
import { MatToolbar, MatToolbarRow } from "@angular/material/toolbar";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatGridListModule,
    AsyncPipe,
    RouterOutlet,
    MatButtonModule,
    NgForOf,
    DatePipe,
    MatToolbarRow,
    MatToolbar
  ]
})
export class InboxComponent implements OnInit {

  // exemplo = 'Olá'
  smallScreen$: Observable<boolean>;
  messages$: Observable<Message[]>;


  constructor(
    private breakPoint: BreakpointObserver,
    private router: Router,
    private messageService: MessageService,
  ) {
    this.smallScreen$ = this.breakPoint.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
      map(result => result.matches),
    )
    // this.smallScreen$.subscribe(result => console.log(result))
    // this.breakPoint.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => console.log(result));

    this.messages$ = this.messageService.messages$;
  }

  ngOnInit(): void {
    this.messageService.getMessages();
  }


  replyToMessage(message: Message): void {
    const replyMessage: Message = {
      text: 'Resposta à ' + message.text,
      title: message.title,
      sender: 'User2',
      receiver: message.sender,
      timestamp: new Date(),
      status: MessageStatus.Normal,
    };
    this.messageService.sendMessage(replyMessage);
  }

  createMessage(): void {
    const newMessage: Message = {
      text: 'This is a new message',
      title: 'New Message',
      sender: 'User',
      receiver: 'User2',
      timestamp: new Date(),
      status: MessageStatus.Normal
    };

    this.messageService.createMessage(newMessage).subscribe(
      () => {
        // Mensagem criada, não é necessário adicionar manualmente ao array
      },
      error => {
        console.error('Error creating message', error);
      }
    );
  }

  deleteMessage(id: string | undefined): void {
    this.messageService.deleteMessage(id).subscribe(
      () => {
        // Mensagem excluída, não é necessário atualizar manualmente o array
      },
      error => {
        console.error('Error deleting message', error);
      }
    );
  }

  archiveMessage(id: string | undefined): void {
    this.messageService.archiveMessage(id).subscribe(
      () => {
        // Mensagem arquivada, não é necessário atualizar manualmente o array
      },
      error => {
        console.error('Error archiving message', error);
      }
    );
  }
}
