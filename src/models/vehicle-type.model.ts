import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { VehicleCategoryModel } from './vehicle-category.model';
import { ITrackableEntity } from './common.model';
import { Optional } from 'sequelize';

export interface IVehicleType extends ITrackableEntity {
  vehicleTypeId: number;
  typeName: string;
  count: number;
  vehicleCategoryId: number;
}

export interface IVehicleTypeCreation extends Optional<IVehicleType, 'vehicleTypeId'> { }

@Table({ tableName: 'vehicle_types', timestamps: false, version: false })
export class VehicleTypeModel extends Model<IVehicleType, IVehicleTypeCreation> {
  @Column({ primaryKey: true, allowNull: false, autoIncrement: true, field: 'vehicle_type_id' })
  vehicleTypeId!: number;

  @Column({ field: 'type_name' })
  typeName!: string;

  @Column({ field: 'count' })
  count!: number;

  @Column({ field: 'created_at' })
  createdAt!: number;

  @Column({ field: 'updated_at' })
  updatedAt!: number;

  @ForeignKey(() => VehicleCategoryModel)
  @Column({ field: 'vehicle_category_id' })
  vehicleCategoryId!: number;
}
