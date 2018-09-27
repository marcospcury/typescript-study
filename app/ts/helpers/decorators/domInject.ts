export function domInject(seletor: string) {

  return function (target: any, key: string) {

    let elemento: HTMLElement;

    const getter = function () {

      if (!elemento) {
        console.log(`buscando  ${seletor} para injetar em ${key}`);
        elemento = <HTMLElement>document.querySelector(seletor);
      }

      return elemento;
    }

    Object.defineProperty(target, key, {
      get: getter
    });
  }
}