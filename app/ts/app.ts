import { NegociacaoController } from './controllers/NegociacaoController';

export const controller = new NegociacaoController();
document
  .querySelector('.form')
  .addEventListener('submit', controller.adiciona.bind(controller));