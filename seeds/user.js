/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {nama_user: 'bulldozer', jabatan: 'penaksir', created_at: currentDate, update_at: currentDate},
    {nama_user: 'samina', jabatan: 'penaksir', created_at: currentDate, update_at: currentDate},
    {nama_user: 'john legend', jabatan: 'kaunit', created_at: currentDate, update_at: currentDate},
    {nama_user: 'omni', jabatan: 'kasir', created_at: currentDate, update_at: currentDate},
  ]);
};
