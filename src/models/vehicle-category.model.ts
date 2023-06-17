import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { VehicleTypeModel } from './vehicle-type.model';
import { Optional } from 'sequelize';
import { ITrackableEntity } from './common.model';

export interface IVehicleCategory extends ITrackableEntity {
  vehicleCategoryId: number;
  categoryName: string;
}

export interface IVehicleCategoryCreation extends Optional<IVehicleCategory, 'vehicleCategoryId'> { }

@Table({ tableName: 'vehicle_categories', timestamps: false, version: false })
export class VehicleCategoryModel extends Model<IVehicleCategory, IVehicleCategoryCreation> {
  @Column({ primaryKey: true, allowNull: false, autoIncrement: true, field: 'vehicle_category_id' })
  vehicleCategoryId!: number;

  @Column({ field: 'category_name' })
  categoryName!: string;

  @Column({ field: 'created_at' })
  createdAt!: number;

  @Column({ field: 'updated_at' })
  updatedAt!: number;

  @HasMany(() => VehicleTypeModel)
  vehicleTypes: VehicleTypeModel[];
}
