import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';

/**
 * Represents an app user.
 */
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

/**
 * Represents an app user with `Sequelize` support.
 */
export class UserModel
  extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>
  implements User
{
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

/**
 * The name of the physical table in the database, storing `UserModel`s.
 */
export const USER_TABLE_NAME = 'users';

/**
 * Initializes the physical DB table for `UserModel` with the given `Sequelize` instance.
 * @param sequelize The `Sequelize` instance to use.
 */
export async function initUserTable(sequelize: Sequelize) {
  UserModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: USER_TABLE_NAME
    }
  );
  await UserModel.sync();
}
