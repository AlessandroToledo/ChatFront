import { Component, OnInit  } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private chatService: ChatService, private router: Router) { }

  usersOn: number | null = null;

  
  ngOnInit(): void {
    this.chatService.usersOn().subscribe({
      next: (response) => {
        this.usersOn = response
    }
    });
  }

  onLogin(nome: string): void {
    this.chatService.addUser(nome).subscribe({
      next: (response) => {
        this.router.navigate(['/chat-area',nome]);
    }
    });
  }


}
