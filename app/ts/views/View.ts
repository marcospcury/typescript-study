export abstract class View<T> {
  protected _elemento: Element;

  constructor(seletor: string, private escapar: boolean = false) {
    this._elemento = <Element>document.querySelector(seletor);
  }

  update(model: T): void {
    let template = this.template(model);
    if (this.escapar)
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    this._elemento.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}