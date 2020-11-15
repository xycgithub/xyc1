import { Field, ObjectType } from "@nestjs/graphql";
import { type } from "os";
import { Community } from "src/community/community.entity";
import { House } from "src/house/house.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity()
@ObjectType()
export class Building {

    @PrimaryGeneratedColumn()
    @Field({
        description: 'ID'
    })
    id: string;

    @Column()
    @Field({
        nullable: false,
        description: '楼栋名称'
    })
    buildingname: string;

    @Column()
    @Field({
        nullable: false,
        description: '建筑面积'
    })
    floorage: number;

    @ManyToOne(() => Community, community => community.building)
    @Field(type => Community, {
        description: '小区'
    })
    community: Community;

    @OneToMany(() => House, house => house.building)
    @Field(type => [House], {
        description: '房屋'
    })
    house: House[];
}