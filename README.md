🧠 Estruturas de Dados — Fila e Pilha em TypeScript

Este repositório contém exercícios práticos desenvolvidos em TypeScript para representar o funcionamento das estruturas de dados Pilha (Stack) e Fila (Queue).
O objetivo é praticar a lógica de programação e compreender o comportamento dessas estruturas de forma interativa no terminal.

🚀 Objetivo

Aplicar os conceitos de estruturas lineares, trabalhando com inserção, remoção e listagem de elementos, utilizando menus simples no terminal.

Os programas simulam o comportamento real das estruturas:

Pilha (Stack): último elemento a entrar é o primeiro a sair (LIFO)

Fila (Queue): primeiro elemento a entrar é o primeiro a sair (FIFO)

## Estrutura de Pastas

## 🗂 Estrutura do Repositório

```bash
exercicios-js/
│
├── ExFilaPilha/
│   ├── Ex1Fila.js
│   ├── Ex2Pilha.js
│
├── .gitignore
└── README.md
├── package.json
└── tsConfig.json


Apenas os exercícios e implementações estão dentro da pasta ExFilaPilha.
Todos os arquivos de configuração e controle do projeto ficam na raiz.

⚙️ Como Executar

Instale as dependências (caso ainda não tenha feito):

npm install readline-sync


Execute os exercícios diretamente com o ts-node:

npx ts-node ExFilaPilha/Ex1Pilha.ts   # Executa o exercício da Pilha
npx ts-node ExFilaPilha/Ex2Pilha.ts   # Executa o exercício da Fila


Ou compile para JavaScript e execute com Node:

npx tsc
node ExFilaPilha/Ex1Pilha.js
node ExFilaPilha/Ex2Pilha.js