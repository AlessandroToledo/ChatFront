import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Message {
  remetente: string;
  texto: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'https://localhost:7016/chat';
  constructor(private http: HttpClient) { }

  usersOn(): Observable<any> {
    const url = `${this.apiUrl}/usersOn`;
    return this.http.get<any>(url);
  }

  addUser(nome: string): Observable<any> {
    const url = `${this.apiUrl}/${nome}`;
    return this.http.post<any>(url,{});
  }

  getAllUsers(): Observable<string[]> {
    const url = `${this.apiUrl}/allUsers`;
    return this.http.get<string[]>(url);
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }

  newMessage(remetente: string, texto: string): Observable<Message> {
    const message: Message = { remetente, texto };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}`;
    return this.http.post<Message>(this.apiUrl, message, { headers });
  }

}
