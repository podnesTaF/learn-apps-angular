import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from '../models/note';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
  @Input() categories: { title: string; id: number }[] = [];
  @Input() noteToEdit?: INote;
  @Output() noteCreated = new EventEmitter<{
    text: string;
    categoryId: number;
  }>();
  @Output() noteEdited = new EventEmitter<{
    noteId: number;
    text: string;
    categoryId: number;
  }>();

  text: string = '';
  categoryId: number | null = null;

  handleNote() {
    if (!this.text || !this.categoryId) return;
    if (this.noteToEdit) {
      this.noteEdited.emit({
        noteId: this.noteToEdit.id,
        text: this.text,
        categoryId: +this.categoryId,
      });
    } else {
      this.noteCreated.emit({
        text: this.text,
        categoryId: +this.categoryId,
      });
    }
    this.text = '';
    this.categoryId = null;
  }

  isDisabled() {
    return !this.text || !this.categoryId;
  }

  ngOnInit(): void {
    this.text = this.noteToEdit?.text || '';
    this.categoryId = this.noteToEdit?.category.id || null;
  }
}
