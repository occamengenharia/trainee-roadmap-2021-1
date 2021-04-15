const express = require('express');

const app = express()

app.use(express.json())

const users = [];
let id = -1;

app.get('/', function(request, response) {
  console.log('oii');

  return response.json({ok: true});
})

app.get('/users/:user_id', function(request, response) {
  const {user_id} = request.params;
  
  const user = users.find(u => u.id === parseInt(user_id));
  const userIndex = users.findIndex(u => u.id === parseInt(user_id));
  console.log(userIndex);
  console.log(user);

  return response.json(user);
})

app.put('/users/:user_id', function(request, response) {
  const {user_id} = request.params;
  const {nome, email, telefone} = request.body;
  const user = {nome, email, telefone}
  
  const userIndex = users.findIndex(u => u.id === parseInt(user_id));
  if(userIndex<0){
    return response.status(404).json({error: 'usuario nao encontrado'});
  }
  users[userIndex] = {...user, id: users[userIndex].id}

  return response.json(users);
})

app.post('/users', function(request, response) {
  const {nome, email, telefone} = request.body;

  const user = { nome, email, telefone, id: ++id }

  users.push(user);

  return response.json(users);
})

app.listen(3000, () => console.log('servidor rodando na porta 3000'));