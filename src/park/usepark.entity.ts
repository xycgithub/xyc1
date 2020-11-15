import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class UsePark {

    @PrimaryGeneratedColumn()
    @Field({
        description: 'ID'
    })
    id: string;

    @Column()
    @Field({
        nullable: false,
        description: '车位编号'
    })
    pid: string;

    @Column()
    @Field({
        nullable: false,
        description: '使用者姓名'
    })
    tname: string;

    @Column()
    @Field({
        nullable: false,
        description: '车牌号'
    })
    carnumber: string;

    @Column()
    @Field({
        nullable: false,
        description: '车辆类型'
    })
    cartype: string;

    @Column()
    @Field({
        nullable: false,
        description: '车辆品牌'
    })
    carbrand: string;

    @Column()
    @Field({
        nullable: false,
        description: '车辆颜色'
    })
    carcolour: string;

    @Column()
    @Field({
        nullable: false,
        description: '起租时间'
    })
    psdate: Date;

    @Column()
    @Field({
        nullable: false,
        description: '截止时间'
    })
    pedate: Date;

    @Column()
    @Field({
        nullable: false,
        description: '状态'
    })
    state: string;


}