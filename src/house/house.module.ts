import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from 'src/building/building.entity';
import { Resident } from 'src/resident/resident.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Building, Resident]),
    ]
})
export class HouseModule { }
