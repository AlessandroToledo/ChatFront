import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  names: string[] = [];
  usersOn: number | null = null;
  data: string = "";
  nome: string = "";
  

  constructor(private chatService: ChatService, private router: Router, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.actRouter.snapshot.paramMap.get('nome') || "";
    this.chatService.usersOn().subscribe({
      next: (response) => {
        this.usersOn = response
    }
    });
    this.chatService.getAllUsers().subscribe(data => {
      this.names = data;
      console.log(this.names);
    });
  }

  onLogoff(): void {
    this.router.navigate(['']);
  }
}
