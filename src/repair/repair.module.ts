import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repair } from './repair.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Repair])]
})
export class RepairModule { }
