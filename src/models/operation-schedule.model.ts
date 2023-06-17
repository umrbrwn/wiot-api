import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { VehicleCategoryModel } from './vehicle-category.model';
import { OperationScheduleRoutesModel } from './operation-schedule-route.model';
import { Optional } from 'sequelize';
import { ITrackableEntity } from './common.model';

export interface IOperationSchedule extends ITrackableEntity {
  operationScheduleId: number;
  vehicleCategoryId: number;
  dayOfWeek: number;
  startTime: Date;
  endTime: Date;
}

interface IOperationScheduleCreation extends Optional<IOperationSchedule, 'operationScheduleId'> { }

@Table({ tableName: 'operation_schedules', timestamps: false, version: false })
export class OperationScheduleModel extends Model<IOperationSchedule, IOperationScheduleCreation> {
  @Column({ primaryKey: true, allowNull: false, autoIncrement: true, field: 'operation_schedule_id' })
  operationScheduleId!: number;

  @ForeignKey(() => VehicleCategoryModel)
  @Column({ field: 'vehicle_category_id' })
  vehicleCategoryId!: number;

  @Column({ field: 'day_of_week' })
  dayOfWeek!: number;

  @Column({ field: 'start_time' })
  startTime!: Date;

  @Column({ field: 'end_time' })
  endTime!: Date;

  @Column({ field: 'created_at' })
  createdAt!: number;

  @Column({ field: 'updated_at' })
  updatedAt!: number;

  @HasMany(() => OperationScheduleRoutesModel)
  operationSchedules: OperationScheduleRoutesModel[];
}
