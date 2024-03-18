import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContactComponent } from './header-contact/header-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { BodyChatHeaderComponent } from './body-chat-header/body-chat-header.component';



@NgModule({
  declarations: [
    HeaderContactComponent,
    ListContactComponent,
    BodyChatHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderContactComponent,
    ListContactComponent,
    BodyChatHeaderComponent
  ]
})
export class SharedModule { }
