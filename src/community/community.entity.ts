import { Field, ObjectType } from "@nestjs/graphql";
import { type } from "os";
import { Building } from "src/building/building.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Community {

    @PrimaryGeneratedColumn()
    @Field({
        description: 'ID'
    })
    id: string;

    @Column()
    @Field({
        nullable: false,
        description: '小区名称'
    })
    communityname: string;

    @Column()
    @Field({
        nullable: false,
        description: '小区地址'
    })
    address: string;

    @ManyToOne(() => User, user => user.community)
    @Field(type => User, {
        description: '用户'
    })
    user: User;

    @OneToMany(() => Building, building => building.community)
    @Field(type => [Building], {
        description: '楼栋'
    })
    building: Building[];





}