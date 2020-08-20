import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteSidebarComponent } from './note-sidebar/note-sidebar.component';
import { NoteBodyComponent } from './note-body/note-body.component';
import { NoteHeaderComponent } from './note-header/note-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteSidebarComponent,
    NoteBodyComponent,
    NoteHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
