import { NegociacaoController } from './controllers/NegociacaoController';

export const controller = new NegociacaoController();
let element = <Element>document.querySelector('.form');
element.addEventListener('submit', controller.adiciona.bind(controller));