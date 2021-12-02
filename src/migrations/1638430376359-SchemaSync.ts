import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1638430376359 implements MigrationInterface {
    name = 'SchemaSync1638430376359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`band\` CHANGE \`balance\` \`balance\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`band\` CHANGE \`balance\` \`balance\` int NOT NULL`);
    }

}
