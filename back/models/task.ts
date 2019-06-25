import {Table, Column, PrimaryKey, AutoIncrement, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Priorities} from "./enums/priorities";
import {Statuses} from "./enums/statuses";
import {User} from "./user";

@Table({
    tableName: 'Task'
})
export class Task extends Model<Task> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    summary: string;

    @Column
    description: string;

    @Column
    priority: Priorities;

    @Column
    status: Statuses;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @ForeignKey(() => User)
    @Column
    assignee: number;

    @BelongsTo(() => User)
    user;
}
