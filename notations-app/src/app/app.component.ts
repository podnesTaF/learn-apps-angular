import { Component } from '@angular/core';
import { ICategory } from './models/category';
import { INote } from './models/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notations-app';

  tabs: ICategory[] = [
    {
      title: 'University',
      id: 1,
    },
    {
      title: 'Diary',
      id: 2,
    },
    {
      title: 'Work',
      id: 3,
    },
  ];

  notes: INote[] = [
    {
      id: 1,
      text: 'some text',
      category: this.tabs[2], // Work category
    },
    {
      id: 2,
      text: 'another note for work',
      category: this.tabs[2],
    },
    {
      id: 3,
      text: 'a university-related note',
      category: this.tabs[0], // University category
    },
    {
      id: 4,
      text: 'a diary entry',
      category: this.tabs[1], // Diary category
    },
    {
      id: 5,
      text: 'more work-related notes',
      category: this.tabs[2],
    },
    {
      id: 6,
      text: 'research for university project',
      category: this.tabs[0],
    },
    {
      id: 7,
      text: 'reflection on the day',
      category: this.tabs[1],
    },
    {
      id: 8,
      text: 'meeting notes for work',
      category: this.tabs[2],
    },
    {
      id: 9,
      text: 'ideas for upcoming exams',
      category: this.tabs[0],
    },
    {
      id: 10,
      text: 'plans for the weekend',
      category: this.tabs[1],
    },
  ];

  noteToEdit?: INote;

  getNotesToShow() {
    if (!this.activeTabId) return this.notes;
    const activeTab = this.findActiveTab();
    return this.notes.filter((note) => note.category.id === activeTab?.id);
  }

  onTabChange({ id }: { id?: number }) {
    this.activeTabId = id;
  }

  activeTabId: number | undefined;

  findActiveTab() {
    return this.tabs.find((tab) => tab.id === this.activeTabId);
  }

  onNoteAdded(note: { text: string; categoryId: number }) {
    this.notes.push({
      text: note.text,
      category: this.tabs.find((tab) => tab.id === note.categoryId)!,
      id: this.notes.length + 1,
    });
  }

  onEditNote({ noteId }: { noteId: number }) {
    this.noteToEdit = this.notes.find((note) => note.id === noteId);
  }

  onEditedNote({
    noteId,
    text,
    categoryId,
  }: {
    noteId: number;
    text: string;
    categoryId: number;
  }) {
    const note = this.notes.find((note) => note.id === noteId);
    if (!note) return;
    note.text = text;
    note.category = this.tabs.find((tab) => tab.id === categoryId)!;
    this.noteToEdit = undefined;
  }
}
