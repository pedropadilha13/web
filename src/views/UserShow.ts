import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User Details</h1>
        <div><b>User Name: </b>${this.model.get('name')}</div>
        <div><b>User Age: </b>${this.model.get('age')}</div>
      </div>
    `;
  }
}
