import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from 'src/building/building.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Building, User]),
    ]
})
export class CommunityModule { }
