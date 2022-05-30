import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize';

/**
 * Represents a school subject.
 */
export interface Subject {
  id: number;
  name: string;
}

/**
 * Represents a school subject with `Sequelize` support.
 */
export class SubjectModel
  extends Model<InferAttributes<SubjectModel>, InferCreationAttributes<SubjectModel>>
  implements Subject
{
  declare id: number;
  declare name: string;
}

/**
 * The name of the physical table in the database, storing `SubjectModel`s.
 */
export const SUBJECT_TABLE_NAME = 'subjects';

/**
 * Initializes the physical DB table for `SubjectModel` with the given `Sequelize` instance.
 * @param sequelize The `Sequelize` instance to use.
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
      tableName: SUBJECT_TABLE_NAME
    }
  );
  await SubjectModel.sync();
}
