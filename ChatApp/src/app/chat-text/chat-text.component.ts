import { Component, OnInit  } from '@angular/core';
import { ChatService } from '../chat.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

interface Message {
  remetente: string;
  texto: string;
}

@Component({
  selector: 'app-chat-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-text.component.html',
  styleUrl: './chat-text.component.css'
})
export class ChatTextComponent implements OnInit {

   messages: Message[] = [];
   newMessage: Message = { remetente: '', texto: '' };
   data: string = ""; // Nome do remetente para aplicar estilo especial

  constructor(private chatService: ChatService, private actRouter: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.data = this.actRouter.snapshot.paramMap.get('nome') || "";
    this.chatService.getMessages().subscribe(data => {
      this.messages = data;
    });
  }

  sendMessage(message: string): void {
    this.chatService.newMessage(this.data, message).subscribe(message => {
      this.messages.push(message); 
    });
    window.location.reload();
  }

}
