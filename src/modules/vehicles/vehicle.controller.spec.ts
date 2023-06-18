import { jest, expect } from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';

jest.mock('./vehicle.service');

describe('VehicleController', () => {
  let controller: VehicleController;
  let service: VehicleService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VehicleController],
      providers: [VehicleService],
    }).compile();

    controller = app.get<VehicleController>(VehicleController);
    service = app.get<VehicleService>(VehicleService);
  });

  describe('getTypes', () => {
    it('should return a specific vehicle type when typeId is provided', async () => {
      const typeId = 1;
      const expected = {
        vehicleTypeId: 1, typeName: 'Sedan', count: 10, vehicleCategoryId: 1, createdAt: 1, updatedAt: 1
      };
      jest.spyOn(service, 'getVehicleTypes').mockResolvedValue(expected);
      const actual = await controller.getTypes(typeId);
      expect(actual).toEqual(expected);
    });

    it('should return all vehicle type when no typeId is provided', async () => {
      const expected = [
        { vehicleTypeId: 1, typeName: 'Sedan', count: 10, vehicleCategoryId: 1, createdAt: 1, updatedAt: 1 },
        { vehicleTypeId: 2, typeName: 'Hatchback', count: 0, vehicleCategoryId: 2, createdAt: 2, updatedAt: 2 }
      ];
      jest.spyOn(service, 'getVehicleTypes').mockResolvedValue(expected);
      const actual = await controller.getTypes();
      expect(actual).toEqual(expected);
    });
  });

  describe('getCategories', () => {
    it('should return all vehicle categories', async () => {
      const expected = [
        { vehicleCategoryId: 1, categoryName: 'Compact', createdAt: 1, updatedAt: 1 },
        { vehicleCategoryId: 2, categoryName: 'Midsize', createdAt: 2, updatedAt: 2 },
      ];
      jest.spyOn(service, 'getVehicleCategories').mockResolvedValue(expected);
      const actual = await controller.getCategories();
      expect(actual).toEqual(expected);
    });
  })
});
