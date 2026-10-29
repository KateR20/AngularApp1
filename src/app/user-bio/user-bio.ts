
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  imports: [],
  templateUrl: './user-bio.html',
  styleUrl: './user-bio.css'
})
export class UserBio {
  // Receives biography text from the parent component
  bio = input.required<string>();

  // Sends saved biography changes back to the parent
  bioChange = output<string>();

  // Tracks whether the editor is open
  isEditing = signal(false);

  // Temporarily stores edited text
  editedBio = signal('');

  // Opens the biography editor
  editBio() {
    this.editedBio.set(this.bio());
    this.isEditing.set(true);
  }

  // Sends the new biography to the parent
  saveBio() {
    this.bioChange.emit(this.editedBio());
    this.isEditing.set(false);
  }

  // Closes the editor without saving
  cancelEdit() {
    this.isEditing.set(false);
  }
}

