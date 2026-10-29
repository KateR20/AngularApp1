
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-status',
  imports: [],
  templateUrl: './user-status.html',
  styleUrl: './user-status.css'
})
export class UserStatus {
  // Receives online status from the parent
  isOnline = input.required<boolean>();

  // Sends status changes back to the parent
  statusChange = output<boolean>();

  // Toggles the status and notifies the parent
  toggleStatus() {
    this.statusChange.emit(!this.isOnline());
  }
}

