import { Module } from '@nestjs/common';
import { CommunityModule } from './community/community.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { BuildingModule } from './building/building.module';
import { HouseModule } from './house/house.module';
import { RepairModule } from './repair/repair.module';
import { ParkModule } from './park/park.module';
import { join } from 'path';
import { ResidentModule } from './resident/resident.module';
import { Building } from './building/building.entity';
import { House } from './house/house.entity';
import { Park } from './park/park.entity';
import { UsePark } from './park/usepark.entity';
import { Repair } from './repair/repair.entity';
import { Resident } from './resident/resident.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'xyc',
      entities: [
        Building,
        CommunityModule,
        House,
        Park,
        UsePark,
        Repair,
        Resident,
      ],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    CommunityModule,
    BuildingModule,
    HouseModule,
    RepairModule,
    ParkModule,
    ResidentModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
