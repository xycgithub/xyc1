import { Field, ObjectType } from "@nestjs/graphql";
import { House } from "src/house/house.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Resident {

    @PrimaryGeneratedColumn()
    @Field({
        description: 'ID'
    })
    id: String;

    @Column()
    @Field({
        nullable: false,
        description: '姓名'
    })
    name: string;

    @Column()
    @Field({
        nullable: false,
        description: '年龄'
    })
    age: string;

    @Column()
    @Field({
        nullable: false,
        description: '性别'
    })
    sex: string;

    @Column()
    @Field({
        nullable: false,
        description: '身份证'
    })
    idcard: string;

    @Column()
    @Field({
        nullable: false,
        description: '电话'
    })
    telephone: string;

    @Column()
    @Field({
        nullable: false,
        description: '微信'
    })
    wechat: string;

    @Column()
    @Field({
        nullable: false,
        description: 'QQ'
    })
    qq: string;

    @Column()
    @OneToOne(() => House, house => house.resident)
    @Field(type => House, {
        nullable: false,
        description: '房屋'
    })
    house: House;


}