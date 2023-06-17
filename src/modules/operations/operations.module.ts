import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { OperationScheduleModel } from '@models/operation-schedule.model';
import { OperationScheduleRoutesModel } from '@models/operation-schedule-route.model';

import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      OperationScheduleModel,
      OperationScheduleRoutesModel
    ])
  ],
  controllers: [OperationsController],
  providers: [OperationsService]
})
export class OperationsModule { }
