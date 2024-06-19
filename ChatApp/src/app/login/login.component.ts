import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private chatService: ChatService) { }

  errorMessage: string = '';
  usersOn: number | null = null;

  
  ngOnInit(): void {
    this.chatService.usersOn().subscribe({
      next: (response) => {
      
      }
    })
  }

}
