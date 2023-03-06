import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SavenoteComponent } from './savenote/savenote.component';
import { NoteslistComponent } from './noteslist/noteslist.component';

@NgModule({
  declarations: [
    AppComponent,
    SavenoteComponent,
    NoteslistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
