import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { BaseComponent } from './pages/base/base.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SidebarChatComponent } from './pages/sidebar-chat/sidebar-chat.component';
import { ChatBoxComponent } from './pages/chat-box/chat-box.component';


@NgModule({
  declarations: [
    BaseComponent,
    SidebarChatComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class ChatModule { }
