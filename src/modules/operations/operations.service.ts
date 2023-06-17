import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IOperationSchedule, OperationScheduleModel } from '@models/operation-schedule.model';
import { IOperationScheduleRoute, OperationScheduleRoutesModel } from '@models/operation-schedule-route.model';
import OperationScheduleDto from './operation-schedule.dto';
import OperationScheduleRouteDto from './operation-schedule-route.dto';

@Injectable()
export class OperationsService {
  constructor(
    @InjectModel(OperationScheduleModel)
    private operationScheduleModel: typeof OperationScheduleModel,

    @InjectModel(OperationScheduleRoutesModel)
    private operationScheduleRoutesModel: typeof OperationScheduleRoutesModel
  ) { }

  getSchedules(scheduleId?: number): Promise<IOperationSchedule | IOperationSchedule[]> {
    return scheduleId ? this.operationScheduleModel.findByPk(scheduleId) : this.operationScheduleModel.findAll();
  }

  createSchedule(schedule: OperationScheduleDto): Promise<IOperationSchedule> {
    return this.operationScheduleModel.create({ ...schedule });
  }

  getScheduleRoutes(scheduleId: number): Promise<IOperationScheduleRoute[]> {
    return this.operationScheduleRoutesModel.findAll({
      where: { operationScheduleId: scheduleId }
    });
  }

  createScheduleRoute(route: OperationScheduleRouteDto): Promise<IOperationScheduleRoute> {
    return this.operationScheduleRoutesModel.create({ ...route });
  }
}
