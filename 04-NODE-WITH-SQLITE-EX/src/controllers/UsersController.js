const { json } = require('express');
const knex = require('../database/connection');

// No máximo 5 métodos
// LIST | INDEX listar tudo ou com filtros
// SHOW  listar apenas 1
// CREATE criar 1 ou mais 
// DELETE deletar 1 ou mais
// UPDATE atualizar

class UsersController {
  async list(request, response) {
    try {
      const users = await knex('users').select('*');

      return response.json(users);
    }catch(e) {
      console.log(e);
      
      return response.json({error: 'ocorreu um erro ao consultar usuarios'});
    }
  }
  
  async create(request, response) {
    const {name, phone, email} = request.body;

    try {
      const id = await knex.from('user').insert({name, phone, email})[0];
      
      if(!id) {
        throw new Error('erro ao inserir usuario no banco')
      }
      
      return response.json({
        id,
        name, 
        phone, 
        email
      })
    } catch (error) {
      return response.json({error: error.message})
    }
  }
}

module.exports = UsersController;