import {
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  Model,
  CreatedAt,
  UpdatedAt,
  AllowNull, NotEmpty
} from 'sequelize-typescript';

@Table({
  tableName: 'User'
})
export class UserModel extends Model<UserModel> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @NotEmpty({msg: 'User name cannot be empty'})
  @Column
  name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
