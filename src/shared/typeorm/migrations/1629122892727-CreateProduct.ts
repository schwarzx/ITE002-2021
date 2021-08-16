import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1629122892727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //criando table no db
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
