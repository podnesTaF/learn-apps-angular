import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/models/note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent implements OnInit {
  @Input() note?: INote;
  @Output() editNote = new EventEmitter<{ noteId: number }>();

  checked = false;

  finishNote() {
    this.checked = !this.checked;
  }

  onCheck() {
    if (!this.note) return;
    this.checked = !this.checked;
    this.note.isFinished = this.checked;
  }

  onEdit() {
    if (!this.note) return;
    this.editNote.emit({ noteId: this.note.id });
  }

  ngOnInit(): void {
    this.checked = this.note?.isFinished || false;
  }
}
