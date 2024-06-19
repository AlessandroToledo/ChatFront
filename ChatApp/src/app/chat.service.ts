import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'https://localhost:7016/chat';
  constructor(private http: HttpClient) { }

  usersOn(): Observable<any> {
    const url = '${this.apiUrl}/usersOn';
    console.log(this.http.get<any>(url));
    return this.http.get<any>(url);
  }

}
