import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { VideoChatWindowComponent } from './component/video-chat-window/video-chat-window.component';
import { TextChatWindowComponent } from './component/text-chat-window/text-chat-window.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatWindowComponent } from './component/chat-window/chat-window.component';
import { SettingComponent } from './component/setting/setting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatSidenavModule, MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatNativeDateModule,
    MatSidenavModule,
  ]
})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UserListComponent,
    VideoChatWindowComponent,
    TextChatWindowComponent,
    ChatWindowComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
