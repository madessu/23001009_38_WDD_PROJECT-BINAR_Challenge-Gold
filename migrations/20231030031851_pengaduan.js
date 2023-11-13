/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.createTable('pengaduan', table => {
        table.increments('id').primary()
        table.integer('id_ticket').unsigned().references('ticket.id')
        table.integer("id_user").unsigned().references("user.id")
        table.timestamp("tgl_ticket") 
        table.time("jam") 
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
        return knex.schema.dropTable("pengaduan")
};
