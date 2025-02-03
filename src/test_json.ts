const fs = require('fs');
const path = require('path');

export interface IDayValue {
    dia: number
    valor: number
}

export class TestJson {

    file = null
    jsonData: IDayValue[] = []
    total = 0
    
    diasFaturamento = 0
    mediaMensal = 0
    diasSuperiores = 0

    menorValor = 999999999

    maiorValor = 0


    constructor() {
        const file = path.resolve(__dirname, 'data/json_data.json')

        fs.readFile(file, 'utf8', (err: any, data: any) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err)
                return;
            }

            this.jsonData = JSON.parse(data);

            this.calculeResume()
            this.showResume()
        });
    }

    calculeResume() {
        this.jsonData.forEach(data => {

            if (data.valor) {
                this.diasFaturamento++
                this.total += data.valor
                if (data.valor > this.maiorValor) {
                    this.maiorValor = data.valor
                }
                if (data.valor < this.menorValor) {
                    this.menorValor = data.valor
                }
            }
        })

        this.mediaMensal = this.total / this.diasFaturamento

        this.jsonData.forEach(data => {
            if (data.valor > this.mediaMensal) {
                this.diasSuperiores++
            }
        })
    }

    showResume() {
        console.log(`--------- TEST 3 ---------`)
        console.log(`Menor Valor Faturamento no Mês...: ${this.menorValor}`)
        console.log(`Maior Valor Faturamento no Mês...: ${this.maiorValor}`)
        console.log(`Nr de dias no mês em que faturamento diário foi superior à média mensal...: ${this.diasSuperiores}`)
    }

}