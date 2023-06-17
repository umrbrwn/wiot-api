import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { OperationScheduleModel } from './operation-schedule.model';
import { Optional } from 'sequelize';
import { ITrackableEntity } from './common.model';

export interface IOperationScheduleRoute extends ITrackableEntity {
  scheduleRouteId: number;
  operationScheduleId: number;
  startTime: Date;
  endTime: Date;
  startLocation: string;
  endLocation: string;
}

interface IOperationScheduleRouteCreation extends Optional<IOperationScheduleRoute, 'scheduleRouteId'> { }

@Table({ tableName: 'operation_schedule_routes', timestamps: false, version: false })
export class OperationScheduleRoutesModel extends Model<IOperationScheduleRoute, IOperationScheduleRouteCreation> {
  @Column({ primaryKey: true, allowNull: false, autoIncrement: true, field: 'schedule_route_id' })
  scheduleRouteId!: number;

  @ForeignKey(() => OperationScheduleModel)
  @Column({ field: 'operation_schedule_id' })
  operationScheduleId!: number;

  @Column({ field: 'start_time' })
  startTime!: Date;

  @Column({ field: 'end_time' })
  endTime!: Date;

  @Column({ field: 'start_location' })
  startLocation!: string;

  @Column({ field: 'end_location' })
  endLocation!: string;

  @Column({ field: 'created_at' })
  createdAt!: number;

  @Column({ field: 'updated_at' })
  updatedAt!: number;
}
