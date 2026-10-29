
import { Component, input } from '@angular/core';
import type { User } from '../user.model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  // Receives user information from the parent component
  user = input.required<User>();
}
