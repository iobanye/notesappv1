import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
//import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})
export class NoteslistComponent implements OnInit {

  notes_arr: {note:string, firstLine:string}[] = [];
  showNote = false;
  showPopup = false;
  popupNote: any;


  constructor(private sns: NotesService,) {}

  ngOnInit() {
    this.notes_arr = this.sns.notes_arr
  }

  openPopup(note: {note:string, firstLine:string}) {
    this.showPopup = true;
    this.popupNote = note;
  }

  closePopup() {
    this.showPopup = false;
  }

}
