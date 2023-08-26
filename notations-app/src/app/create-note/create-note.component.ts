import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent {
  @Input() categories: { title: string; id: number }[] = [];
  @Output() noteCreated = new EventEmitter<{
    text: string;
    categoryId: number;
  }>();

  text = '';
  categoryId: number | null = null;

  createNote() {
    if (!this.text || !this.categoryId) return;
    this.noteCreated.emit({
      text: this.text,
      categoryId: +this.categoryId,
    });
    this.text = '';
    this.categoryId = null;
  }

  isDisabled() {
    return !this.text || !this.categoryId;
  }
}
