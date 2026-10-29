
import { Component, signal } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { UserStatus } from './user-status/user-status';
import { UserBio } from './user-bio/user-bio';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  imports: [UserCard, UserStatus, UserBio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Main user data shared between components
  user = signal<User>({
    name: 'Kate',
    age: 43,
    role: 'Web Developer',
    location: 'Ontario, Canada',
    profilePicture: 'https://i.pravatar.cc/150?img=47',
    bio: 'Hi! I am Kate, a web developer who loves creating beautiful and functional websites.',
    isOnline: true
  });

  // Updates the user's online status
  updateStatus(status: boolean) {
    this.user.update(current => ({
      ...current,
      isOnline: status
    }));
  }

  // Updates the user's biography
  updateBio(newBio: string) {
    this.user.update(current => ({
      ...current,
      bio: newBio
    }));
  }
}


