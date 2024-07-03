import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'chat-area/:nome', component: ChatAreaComponent}
];
