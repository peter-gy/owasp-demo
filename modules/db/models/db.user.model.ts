import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';

/**
 *
 */
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

/**
 *
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
 *
 * @param sequelize
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
      tableName: 'users'
    }
  );
  await UserModel.sync();
}
