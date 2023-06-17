import { Injectable } from '@nestjs/common';
import { IVehicleType, VehicleTypeModel } from '@models/vehicle-type.model';
import { IVehicleCategory, VehicleCategoryModel } from '@models/vehicle-category.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(VehicleTypeModel)
    private vehicleTypeModel: typeof VehicleTypeModel,

    @InjectModel(VehicleCategoryModel)
    private vehicleCategoryModel: typeof VehicleCategoryModel
  ) { }

  getVehicleTypes(typeId?: number): Promise<IVehicleType | IVehicleType[]> {
    return typeId ? this.vehicleTypeModel.findByPk(typeId) : this.vehicleTypeModel.findAll();
  }

  getVehicleCategories(): Promise<IVehicleCategory[]> {
    return this.vehicleCategoryModel.findAll();
  }
}
