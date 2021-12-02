import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1638430093688 implements MigrationInterface {
    name = 'SchemaSync1638430093688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`band\` ADD \`balance\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`band\` DROP COLUMN \`balance\``);
    }

}
