import { Module } from '@nestjs/common';
import { createConfigModule } from './config.module-factory.js';
import { createSequelizeModule } from './sequelize.module-factory.js';
import { OperationsModule } from './operations/operations.module.js';
import { VehicleModule } from './vehicles/vehicle.module';

@Module({
  imports: [
    createConfigModule(),
    createSequelizeModule(),
    VehicleModule,
    OperationsModule
  ]
})
export class AppModule { }
