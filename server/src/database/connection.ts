// Para rodar, executar o comando: npx knex migrate:latest --knexfile knexfile.ts migrate:latest
// ou executar o script knex:migrate (npm run knex:migrate)
import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default connection;

// com o KNEX podemos criar o banco de dados diretamento com o javascript.
// MIGRATINS são comandos para migrar as informações de um tipo de banco para outro.
// Migrations = Histórico do banco dedados

// Cada alteração no banco de dados cria um migration.
// Isto auxilia grupos de desenvolvedores num mesmo projeto
// Os comandos de migration permitem as consolidações de várias tabelas de DB de diversos programadores em uma base só com rapideez.

