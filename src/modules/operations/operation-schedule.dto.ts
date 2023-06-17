import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, Min, Max, Validate } from 'class-validator';

export default class OperationScheduleDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'Vehicle category id' })
  vehicleCategoryId: number;

  @IsNotEmpty()
  @IsNumber() @Min(1) @Max(7)
  @ApiProperty({ description: 'Day of week between 1-7' })
  dayOfWeek: number;

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
}
