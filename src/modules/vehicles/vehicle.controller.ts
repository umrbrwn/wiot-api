import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('/api/vehicles')
export class VehicleController {
  constructor(
    private readonly vehicleService: VehicleService
  ) { }

  @Get('types/:id?')
  @ApiOperation({ summary: 'Get the vehicle types that belong to a category' })
  @ApiParam({ name: 'id', required: false, description: 'Vehicle type id', allowEmptyValue: true })
  async getTypes(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id?: number) {
    return this.vehicleService.getVehicleTypes(id);
  }

  @Get('categories')
  @ApiOperation({ summary: 'Get vehicle categories' })
  async getCategories() {
    return this.vehicleService.getVehicleCategories();
  }
}
