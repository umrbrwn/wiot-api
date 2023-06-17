import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { VehicleTypeModel } from '@models/vehicle-type.model';
import { VehicleCategoryModel } from '@models/vehicle-category.model';

import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      VehicleTypeModel,
      VehicleCategoryModel
    ])
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule { }
