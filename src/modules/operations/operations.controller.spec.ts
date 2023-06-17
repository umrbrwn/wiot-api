import { Test, TestingModule } from '@nestjs/testing';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.service';
import OperationScheduleDto from './operation-schedule.dto';
import OperationScheduleRouteDto from './operation-schedule-route.dto';

jest.mock('./operations.service');

describe('OperationsController', () => {
  let controller: OperationsController;
  let service: OperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationsController],
      providers: [OperationsService],
    }).compile();

    controller = module.get<OperationsController>(OperationsController);
    service = module.get<OperationsService>(OperationsService);
  });

  describe('getSchedules', () => {
    it('should call the service to get all schedules', async () => {
      const schedules = [
        {
          operationScheduleId: 1, vehicleCategoryId: 1, dayOfWeek: 1,
          startTime: new Date(), endTime: new Date(), createdAt: 1, updatedAt: 1
        },
        {
          operationScheduleId: 2, vehicleCategoryId: 1, dayOfWeek: 2,
          startTime: new Date(), endTime: new Date(), createdAt: 2, updatedAt: 2
        }
      ];
      jest.spyOn(service, 'getSchedules').mockResolvedValue(schedules);

      const actual = await controller.getSchedules();

      expect(actual).toEqual(schedules);
      expect(service.getSchedules).toHaveBeenCalledWith(undefined);
    });

    it('should call the service to get a specific schedule', async () => {
      const scheduleId = 1;
      const schedule = {
        operationScheduleId: 1, vehicleCategoryId: 1, dayOfWeek: 1,
        startTime: new Date(), endTime: new Date(), createdAt: 1, updatedAt: 1
      };
      jest.spyOn(service, 'getSchedules').mockResolvedValue(schedule);

      const actual = await controller.getSchedules(scheduleId);

      expect(actual).toEqual(schedule);
      expect(service.getSchedules).toHaveBeenCalledWith(scheduleId);
    });
  });

  describe('createSchedule', () => {
    it('should call the service to create a new schedule', async () => {
      const startTime = new Date();
      const endTime = new Date();
      endTime.setHours(startTime.getHours() + 5);
      const schedule: OperationScheduleDto = {
        vehicleCategoryId: 1, dayOfWeek: 1, startTime, endTime
      };

      jest.spyOn(service, 'createSchedule').mockResolvedValue(null);

      await controller.createSchedule(schedule);

      expect(service.createSchedule).toHaveBeenCalledWith(schedule);
    });
  });

  describe('getScheduleRoutes', () => {
    it('should call the service to get schedule routes', async () => {
      const scheduleId = 1;
      const routes = [
        {
          scheduleRouteId: 1, operationScheduleId: 1, startTime: new Date(), endTime: new Date(),
          startLocation: 'start location 1', endLocation: 'end location 1', createdAt: 1, updatedAt: 1
        },
        {
          scheduleRouteId: 2, operationScheduleId: 1, startTime: new Date(), endTime: new Date(),
          startLocation: 'start location 2', endLocation: 'end location 2', createdAt: 2, updatedAt: 2
        },

      ];
      jest.spyOn(service, 'getScheduleRoutes').mockResolvedValue(routes);

      const actual = await controller.getScheduleRoutes(scheduleId);

      expect(actual).toEqual(routes);
      expect(service.getScheduleRoutes).toHaveBeenCalledWith(scheduleId);
    });
  });

  describe('createScheduleRoute', () => {
    it('should call the service to create a new schedule route', async () => {
      const scheduleId = 1;
      const route: OperationScheduleRouteDto = {
        // should be replaced by id route param
        operationScheduleId: -1,
        startTime: new Date(),
        endTime: new Date(),
        startLocation: 'starting location 1',
        endLocation: 'ending location 1'
      };
      jest.spyOn(service, 'createScheduleRoute').mockResolvedValue(null);

      await controller.createScheduleRoute(scheduleId, route);

      expect(service.createScheduleRoute).toHaveBeenCalledWith({ operationScheduleId: scheduleId, ...route });
    });
  });
});
