import { ApiProperty } from '@nestjs/swagger';
import { Transform, Exclude } from 'class-transformer';
import { IsDate, IsNotEmpty, Validate } from 'class-validator';

export default class OperationScheduleRouteDto {
  @Exclude()
  operationScheduleId: number;

  @IsNotEmpty()
  @Transform((param) => new Date(param.value))
  @IsDate()
  @ApiProperty({ description: 'Start time of schedule' })
  startTime: Date;

  @IsNotEmpty()
  @Transform((param) => new Date(param.value))
  @IsDate()
  @Validate((value, { object }) => value > object.startTime, {
    message: 'endTime must be greater than startTime',
  })
  @ApiProperty({ description: 'End time of schedule' })
  endTime: Date;

  @IsNotEmpty()
  @ApiProperty({ description: 'Start location of route' })
  startLocation: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'End location of route' })
  endLocation: string;
}
