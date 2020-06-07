// Para rodar, executar o comando: npx knex migrate:latest --knexfile knexfile.ts migrate:latest
import path from 'path';

module.exports = { // o knex não funciona com o 'export default'
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true,
};