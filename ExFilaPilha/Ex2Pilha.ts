import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<String>();

let valorMenu: number;
let livro: string;

do {
    console.log("\n*********************************");
    console.log("Menu da pilha:");
    console.log("1 - Adicionar livro na pilha");
    console.log("2 - Listar todos os livros");
    console.log("3 - Retirar livro da pilha");
    console.log("0 - Sair");
    console.log("*********************************\n");

    valorMenu = readlinesync.questionInt("Digite a opcao desejada: ");

    switch (valorMenu) {
        case 1:
            livro = readlinesync.question("\nDigite o nome do livro: ");
            pilha.push(livro);
            console.log(`\nLivro '${livro}' adicionado na pilha!`);
            console.log("\nLista atual:");
            pilha.printStack();
            break;

        case 2:
            console.log("\nLista de livros na pilha:");
            pilha.printStack();
            break;

        case 3:
            const removido = pilha.pop();
            if (removido){
                console.log(`\nLivro '${removido}' foi removido da pilha.\n`);
                pilha.printStack();
            }else
                console.log("\nA Pilha esta vazia!\n");
            break;

        case 0:
            console.log("\nPrograma finalizado. Ate logo!\n");
            break;

        default:
            console.log("\nOpcao invalida! Tente novamente.\n");
            break;
    }

} while (valorMenu !== 0);