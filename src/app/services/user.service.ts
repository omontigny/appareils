import {User} from '../models/User.model';
import {Subject} from 'rxjs-compat/Subject';

export class UserService {
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james@smith.com',
      drinkPreference: 'Coca',
      hobbies: ['coder', 'dégustation de café']
    }
  ];
  userSubject = new Subject<User[]>();

  // tslint:disable-next-line:typedef
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  // tslint:disable-next-line:typedef
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
