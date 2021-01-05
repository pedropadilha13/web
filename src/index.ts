import { User } from './models/User';

// const user = new User({ name: 'perdo', age: 21 });
const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.on('save', () => {
  console.log('User saved!', user.getAll());
});

user.fetch();

user.set({ name: 'perdo' });
user.set({ age: 20 });
user.save();

// user.fetch();
// user.set({ age: 21 });
// user.save();

// user.set({ name: 'New name' });
// console.log(user);
