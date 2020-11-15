import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from 'src/community/community.entity';
import { House } from 'src/house/house.entity';
import { Building } from './building.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Building, Community, House]),
    ]
})
export class BuildingModule { }
