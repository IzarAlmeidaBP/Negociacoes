export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
    this.validarValores();
  }

  private validarValores(): void {
    if (!Number.isFinite(this.quantidade) || this.quantidade <= 0) {
      throw new Error('A quantidade deve ser um número positivo.');
    }

    if (!Number.isFinite(this.valor) || this.valor <= 0) {
      throw new Error('O valor deve ser um número positivo.');
    }
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    return new Date(this._data.getTime());
  }

  static criar(data: Date, quantidade: number, valor: number): Negociacao {
    return new Negociacao(data, quantidade, valor);
  }
}
