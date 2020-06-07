// Para rodar: npm run dev
// ou: yarn dev (precisa instalar o yarn no windows antes)
// Para conseguir ver todos os métodos (post, put e delete além do get) instalar o insomnia.rest
// Com o insomnia podemos substitruir o browser para visualizar as saídas docódigo e realização de testes

import express from 'express';

const app = express(); // por padrão o express não entende que estamos fazendo uma API JSON, ele entende todos os tipos de linguagens. Precisamos definir.

app.use(express.json()); // fixamos o plugin do express para json.

// Rota (endereço completo da requisição): localhost:3333/users
// Recurso (qual entidade estamos acessando do sistema): users

// GET: buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existenteno back-end
// DELETE: Remover uma informação do back-end

// Exemplo:
// POST http://localhost:3333/users = Criar usuário
// GET  http://localhost:3333/users = Listar usuários
// GET  http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros obrigatório da rota que vem na própria rota que identificam um recurso (ex. Buscar um  único usuário, identificar ou deletar um único usuário)
// Query Param: Parâmetros opcionais da rota para filtrar algo específico da rota, ou paginação, por exemplo.
// Request Body: Parâmetros para criação e atualização de informações dos recursos.

// Para o banco de dados, vamos usar o SQLite, pois não precisamos instalar nada na máquina.Todo o DB fica em um arquivo do projeto.
// Usaremos o KNEXJS pois ele padroniza a linguagem de diversos bancos de dados para uma linguagem javascript.
// O KNEX nos dá a liberdade de mudar de tipo de banco de dados sem alterar as estruturas das querys feitas para o DB.

// Exemplo:
// SQL:  SELECT * FROM users WHERE name = 'Guilherme Patriota'
// KNEX: knex('users').where('name', 'Guilherme Patriota').select('*')

const users = [
    'Guilherme Patriota', // posição 0
    'Suelen',             // posição 1
    'Marina',             // posição 2
    'Clovis'              // posição 3
]
app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
   
    //JSON - JavaScript Object Notation

    //response.send('Hello World');

    // Exemplo de uso dos query params:
    const search = String(request.query.search);

    console.log(search); // mostra o que foi recebido pela query search

    // Para filtrar os usuários:
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => { // o : significa que receberei um parâmetro dentro da minha requisição
    const id = Number(request.params.id); // como o id é recebido como string, precisamos converter para número para usar no array.

    const user = users[id];

    return response.json(user)
}); 

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);
    
    
    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app. listen(3333);