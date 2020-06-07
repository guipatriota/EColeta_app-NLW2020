import Knex, { KnexTimeoutError } from 'knex';

export async function up(knex: Knex) {
  // UTILIZADO PARA CRIAR A TABELA
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  })
}

export async function down(knex: Knex) {
  // UTILIZADO PARA VOLTAR ATRAS (DELETAR A TABELA)
  return knex.schema.dropTable('items');
}