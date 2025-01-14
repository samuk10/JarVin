# FSW-barber-app Setup 
### NEXT.JS workshop

# ! ==TODO:==
- [ ] criar  um repo com esse template de setup e basta rodar:
- [ ] npx create-next-app@latest fsw-barber github:repo

```shell
# criar projeto
npx create-next-app@latest fsw-barber

# instalar prisma
npm install prisma --save-dev

# cria um schema e vc precisa modelar
npx prisma init --datasource-provider postgresql

# formatar o schema
npx prisma format

# cria migration em dev
npx prisma migrate dev --name init_db

# add nos scripts package.json e instalar:
npm install -D ts-node 

# executar o sript
npx prisma db seed

# install prettier prettier-plugin-tailwindcss
npm install -D prettier prettier-plugin-tailwindcss
>> .prettierrc.json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tabWidth": 2,
  "semi": false
}

# install shadcn
https://ui.shadcn.com/

# add compontentes do shadcn
npx shadcn-ui@latest add card

---
# workflow + linter
# husky para rodar prettier e eslint antes de cada commit
npm install -D husky lint-staged
npx husky init

# Garantir conventional commit mensage
npm install -D git-commit-msg-linter
# add em cada arquivo:
>>> coursesProjects/.husky/commit-msg
.git/hooks/commit-msg $1

>>> coursesProjects/.husky/pre-commit
npx lint-staged

>>> .lintstagedrc.json
{
"*.ts?(x)": ["eslint --fix", "prettier --write"]
}

# alterar o package.json pra rodar husky quando der npm install na vercel
"prepare": "husky"

---
# aula2
shadcn add dialog
baixar google.svg public
nextauth.js v4: 

npm install next-auth

seguir: [guia pra next 14](https://next-auth.js.org/configuration/initialization#route-handlers-app)

# add Adapter Prisma + nextauth
https://authjs.dev/getting-started/adapters/prisma

# add schema prisma adapter e depois atualizar
scheme.prisma

# formatar arquivo
npx prisma format

# add migrations para criar tables no banco
npx prisma migrate dev --name add_auth_tables

# shadcn search form

# shadcn calendar
npm install date-fns

# serverActions, usamos para chamar função executada no server/banco atraves do cliente

# app na vercel
# db no neon

# se subir meu banco num novo banco tem que rodar o npx prisma nele pra # popular o banco com o schema tables
npx prisma migrate deploy

# e fazer o seed dos dados
npx prisma db seed
npx prisma generate

# alterar o package.json pra rodar o prisma quando der npm install na vercel
"prepare": "husky && prisma generate"

# add URL no google dashboard, para apontar a autenticação pro dominio do vercel poder autenticar

# NEXT.JS DEPLOYMENT (PESQUISAR)
# enves do vercel tem:
- docker
- sst (que usa openNext)
- openNext

# stripe plataforma de pagamento

# criar um app com dashboard para o gerenciar cada serviço
# mas por hora melhor criar uma pasta nova como admin 
# e se escalar separar numa nova aplicação

# next taint: sobre segurança, banco de dados

```
# Dicas para testes técnicos em vagas React (testes de hooks)
https://www.youtube.com/watch?v=IrJCyApBERw

https://medium.com/@alisoneuropa/introdu%C3%A7%C3%A3o-ao-react-hooks-como-usar-os-hooks-para-melhorar-seu-c%C3%B3digo-em-next-js-5730f941560c

- ### criar [useState](https://medium.com/@alisoneuropa/introdu%C3%A7%C3%A3o-ao-react-hooks-como-usar-os-hooks-para-melhorar-seu-c%C3%B3digo-em-next-js-5730f941560c):		
	- O useState é um Hook que permite que você adicione estado a um componente funcional. Você pode usar o useState para controlar variáveis de estado, como strings, números e objetos.
	- 
```ts
# explique esse código:
"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}



// It displays a counter that increments when a button is clicked.

Here's a breakdown:

const [count, setCount] = useState(0); initializes a state variable count to 0, with a function setCount to update it.
function handleIncrement() defines a function to increment the count by 1 when called.
The return statement renders a paragraph displaying the current count and a button. When the button is clicked, it calls handleIncrement, which updates the count.
```
- ### criar [useEffect](https://medium.com/@alisoneuropa/introdu%C3%A7%C3%A3o-ao-react-hooks-como-usar-os-hooks-para-melhorar-seu-c%C3%B3digo-em-next-js-5730f941560c) pra lidar com sideEffects(chamadas de API)
	- O useEffect é um Hook que permite que você execute efeitos colaterais, como a busca por dados em uma API ou a atualização do título da página. Ele é executado após cada renderização do componente.

reducer vai pelo que entendi vai ser o cara que abstrai os outros 2.
utilizando actions como do angular e vai definir o que cada ação vai fazer!
 - recebe estado e faz uma ação
por ex:
SET_USERS: vou pegar o state atual e setar com o novo user


---
# Desafio de Entrevista de Código React

### Requisitos

1. Exibir uma lista com nome do usuário, avatar e função.
2. Implementar funcionalidade de filtragem com base na função do usuário.

**Objetivo:** Buscar dados de usuários e exibir uma lista com nome do usuário, avatar e função.

1. **Configurar o Projeto:**

- Crie um novo aplicativo React usando Create React App. Instale as - dependências necessárias: `axios` por exemplo.

2. **Crie um componente para buscar e exibir os dados dos usuários:**

- Busque dados de usuários en `http://dummyjson.com/users`.
- Exiba uma lista mostrando nome do usuário, avatar e função.
- Implemente a funcionalidade de filtragem com base na função do usuário.

---


# ! ==TODO:==
- [ ] criar  um repo com esse template de setup e basta rodar:
- [ ] npx create-next-app@latest nextjs-template github:repo

```shell
# criar projeto
npx create-next-app@latest nextjs-template

# install prettier prettier-plugin-tailwindcss
npm install -D prettier prettier-plugin-tailwindcss
>> .prettierrc.json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tabWidth": 2,
  "semi": false
}

# install shadcn
https://ui.shadcn.com/
npx shadcn-ui@latest init

---
# workflow + linter
# husky para rodar prettier e eslint antes de cada commit
npm install -D husky lint-staged
npx husky init

# Garantir conventional commit mensage
npm install -D git-commit-msg-linter
>>> coursesProjects/.husky/commit-msg
.git/hooks/commit-msg $1

>>> coursesProjects/.husky/pre-commit
npx lint-staged

>>> .lintstagedrc.json
{
"*.ts?(x)": ["eslint --fix", "prettier --write"]
}

# alterar o package.json pra rodar husky quando der npm install na vercel
"prepare": "husky"

```


