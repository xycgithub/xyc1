import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Park {

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
        description: '车位状态'
    })
    state: string;
}