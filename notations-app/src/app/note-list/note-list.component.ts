import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INote } from '../models/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent {
  @Input() notes: INote[] = [];
  @Output() editNote = new EventEmitter<{ noteId: number }>();
}
