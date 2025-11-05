import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();

let valorMenu: number;
let cliente: string;

do {
    console.log("\n*********************************");
    console.log("Menu da fila:");
    console.log("1 - Adicionar cliente a fila");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Retirar cliente da fila");
    console.log("0 - Sair");
    console.log("*********************************\n");

    valorMenu = readlinesync.questionInt("Digite a opcao desejada: ");

    switch (valorMenu) {
        case 1:
            cliente = readlinesync.question("\nDigite o nome do cliente: ");
            fila.enqueue(cliente);
            console.log(`\nCliente '${cliente}' adicionado a fila!`);
            console.log("\nFila atual:");
            fila.printQueue();
            break;

        case 2:
            console.log("\nLista de clientes na fila:");
            fila.printQueue();
            break;

        case 3:
            const removido = fila.dequeue();
            if (removido){
                console.log(`\nCliente '${removido}' foi removido da fila.\n`);
                fila.printQueue();
            }else
                console.log("\nA fila esta vazia!\n");
            break;

        case 0:
            console.log("\nPrograma finalizado. Ate logo!\n");
            break;

        default:
            console.log("\nOpcao invalida! Tente novamente.\n");
            break;
    }

} while (valorMenu !== 0);
