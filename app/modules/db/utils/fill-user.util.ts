import { User, UserModel } from '../models/db.user.model';

/**
 * Fills the `users` db table with random data
 * @param n number of users to create
 * @returns {Promise<void>}
 */
export async function fillWithRandomUsers(n: number) {
  for (let i = 0; i < n; i++) {
    const user: User = {
      id: i,
      name: 'User ' + i,
      email: 'user' + i + '@example.com',
      password: 'password' + i
    };
    await UserModel.create(user);
  }
}
