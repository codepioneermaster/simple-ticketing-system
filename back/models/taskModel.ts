import {
    Table,
    Column,
    PrimaryKey,
    AutoIncrement,
    Model,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    BelongsTo,
    NotEmpty, Default, AllowNull
} from 'sequelize-typescript';
import {Priorities} from "./enums/priorities";
import {Statuses} from "./enums/statuses";
import {UserModel} from "./userModel";

@Table({
    tableName: 'Task'
})
export class TaskModel extends Model<TaskModel> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @NotEmpty({msg: 'Task summary cannot be empty'})
    @Column
    summary: string;

    @Column
    description: string;

    @Column
    priority: Priorities;

    @AllowNull(false)
    @Default(Statuses.New)
    @Column
    status: Statuses;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @ForeignKey(() => UserModel)
    @Column
    assignee: number;

    @BelongsTo(() => UserModel)
    user;
}
