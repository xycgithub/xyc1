import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Park } from './park.entity';
import { UsePark } from './usepark.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Park, UsePark])
    ]
})
export class ParkModule { }
