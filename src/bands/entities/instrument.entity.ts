import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Band } from "./band.entity";
import { Member } from "./member.entity";

@Entity()
export class Instrument {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @ManyToMany(type => Member, obj => obj.instruments)
    members: Member[];
}
