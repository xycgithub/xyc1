import { Field, ObjectType } from "@nestjs/graphql";
import { Building } from "src/building/building.entity";
import { Resident } from "src/resident/resident.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class House {

    @PrimaryGeneratedColumn()
    @Field({
        description: 'ID'
    })
    id: string;

    @Column()
    @Field({
        nullable: false,
        description: '房屋编号'
    })
    hid: string

    @Column()
    @Field({
        nullable: false,
        description: '房屋楼层'
    })
    floor: string;

    @Column()
    @Field({
        nullable: false,
        description: '房屋类型'
    })
    housetype: string;

    @OneToMany(() => Building, building => building.house)
    @Field(type => Building, {
        description: '楼栋'
    })
    building: Building;

    @OneToOne(() => Resident)
    @JoinColumn()
    @Field(type => Building, {
        description: '住户'
    })
    resident: Resident;

}