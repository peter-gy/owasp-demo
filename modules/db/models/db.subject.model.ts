import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';

/**
 *
 */
export interface Subject {
  id: number;
  name: string;
}

/**
 *
 */
export class SubjectModel
  extends Model<InferAttributes<SubjectModel>, InferCreationAttributes<SubjectModel>>
  implements Subject
{
  declare id: number;
  declare name: string;
}

/**
 *
 * @param sequelize
 */
export async function initSubjectTable(sequelize: Sequelize) {
  SubjectModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'subjects'
    }
  );
  await SubjectModel.sync();
}
