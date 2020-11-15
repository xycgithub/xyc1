import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Repair {
    @PrimaryGeneratedColumn()
    @Field({
        description: 'ID'
    })
    id: string;

    @Column()
    @Field({
        nullable: false,
        description: '地址'
    })
    address: string;

    @Column()
    @Field({
        nullable: false,
        description: '住户名称'
    })
    uname: string;

    @Column()
    @Field({
        nullable: false,
        description: '维修人员'
    })
    repairman: string;

    @Column()
    @Field({
        nullable: false,
        description: '联系方式'
    })
    telephone: string;

    @Column()
    @Field({
        nullable: false,
        description: '报修信息说明'
    })
    repair_information: string;

    @Column()
    @Field({
        nullable: true,
        description: '上门报修时间'
    })
    repair_sdate: Date;

    @Column()
    @Field({
        nullable: true,
        description: '维修结束时间'
    })
    repair_edate: Date;

    @Column()
    @Field({
        nullable: false,
        description: '状态'
    })
    state: string;
}