import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-savenote',
  templateUrl: './savenote.component.html',
  styleUrls: ['./savenote.component.css']
})
export class SavenoteComponent implements OnInit {

  form: FormGroup;
  notes_arr: {note:string, firstLine:string}[] = [];


  constructor(private sns: NotesService) {
    let FormControls = {
      note: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    }

    this.form = new FormGroup(FormControls)
   }

  ngOnInit(): void {
    this.notes_arr = this.sns.notes_arr;
  }

  onSubmit() {
    if (this.form.valid) {
      this.sns.onSubmit(this.form);
    }
  }

}
