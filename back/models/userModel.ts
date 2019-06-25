import {Table, Column, PrimaryKey, AutoIncrement, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table({
  tableName: 'User'
})
export class UserModel extends Model<UserModel> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
