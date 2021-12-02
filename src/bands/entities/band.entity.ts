import { Member } from "src/members/entities/member.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Band {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(type => Member, obj => obj.band)
    members: Member[];

    @Column({
        nullable: true
    })
    balance: number;
}
