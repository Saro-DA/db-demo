import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Band } from "./band.entity";
import { Instrument } from "./instrument.entity";

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    @ManyToOne(type => Band, obj => obj.members)
    @JoinColumn({
        name: 'band_id',
        referencedColumnName: 'id'
    })
    band: Band;

    @ManyToMany(type => Instrument, obj => obj.members)
    @JoinTable({
        name: 'member_instrument',
        joinColumn: {
            name: 'member_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'instrument_id',
            referencedColumnName: 'id'
        }
    })
    instruments: Instrument[];
}
