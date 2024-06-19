import { Component } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';
import { ChatTextComponent } from '../chat-text/chat-text.component';

@Component({
  selector: 'app-chat-area',
  standalone: true,
  imports: [ UsersListComponent, ChatTextComponent],
  templateUrl: './chat-area.component.html',
  styleUrl: './chat-area.component.css'
})
export class ChatAreaComponent {

}
