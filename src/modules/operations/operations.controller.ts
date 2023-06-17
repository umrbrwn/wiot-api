import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OperationsService } from './operations.service';
import OperationScheduleDto from './operation-schedule.dto';
import OperationScheduleRouteDto from './operation-schedule-route.dto';
import { ApiBody, ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('/api/operations')
export class OperationsController {
  constructor(private readonly scheduleService: OperationsService) { }

  @Get('schedules/:id?')
  @ApiOperation({ summary: 'Get the operation schedules of vehicle categories' })
  @ApiParam({ name: 'id', required: false, description: 'Schedule id', allowEmptyValue: true })
  getSchedules(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id?: number) {
    return this.scheduleService.getSchedules(id);
  }

  @Post('schedules')
  @ApiOperation({ summary: 'Create new schedule for a vehicle category' })
  @ApiBody({ type: OperationScheduleDto })
  async createSchedule(@Body() schedule: OperationScheduleDto) {
    await this.scheduleService.createSchedule(schedule);
  }

  @Get('schedules/:id/routes')
  @ApiOperation({ summary: 'Get scheduled routes' })
  @ApiParam({ name: 'id', description: 'Schedule id' })
  async getScheduleRoutes(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: number) {
    return this.scheduleService.getScheduleRoutes(id);
  }

  @Post('schedules/:id/routes')
  @ApiOperation({ summary: 'Create new route for a schedule' })
  @ApiParam({ name: 'id', description: 'Schedule id' })
  @ApiBody({ type: OperationScheduleRouteDto })
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async createScheduleRoute(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: number, @Body() route: OperationScheduleRouteDto) {
    await this.scheduleService.createScheduleRoute({ operationScheduleId: id, ...route });
  }
}
