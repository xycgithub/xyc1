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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'xyc',
      entities: [],
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
