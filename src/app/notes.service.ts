import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes_arr: {note:string, firstLine:string}[] = [];
  notes_form: FormGroup[] = [];

  constructor() {
    this.retrieveNote();
   }

   onSubmit(new_note: FormGroup){
    console.log(new_note);

    var notes = new_note.get('note');

    if (notes) {
      var note = notes.value;
      var content = note.split('\n');
      var firstLine = content[0];
      var noteContent = content.slice(1).join('\n');
      this.notes_arr.push({note: noteContent, firstLine});

      if (localStorage.getItem('notes_container') == null){
        localStorage.setItem('notes_container', '[]');
      }

      localStorage.setItem('notes_container', JSON.stringify(this.notes_arr));
      
    }

  }

  retrieveNote(){

    if (localStorage.getItem('notes_container') != null){
      this.notes_arr = JSON.parse(localStorage.getItem('notes_container') || '{}');
    }
  }



}
