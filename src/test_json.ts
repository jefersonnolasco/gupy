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
    maxValue = 0
    minValue = 999999999
    maxDay = 0
    minDay = 0
    average = 0

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
            this.total += data.valor
            if (data.valor > this.maxValue) {
                this.maxValue = data.valor
                this.maxDay = data.dia
            }
            if (data.valor < this.minValue) {
                this.minValue = data.valor
                this.minDay = data.dia
            }
        })

        this.average = this.total / this.jsonData.length
    }

    showResume() {
        console.log(`--------- TEST JSON ---------`)
        console.log(`Total...: ${this.total}`)
        console.log(`Average...: ${this.average}`)
        console.log(`--------`)
        console.log(`Highest value...: ${this.maxValue}`)
        console.log(`Highest day...: ${this.maxDay}`)
        console.log(`--------`)
        console.log(`Lowest value...: ${this.minValue}`)
        console.log(`Lowest day...: ${this.minDay}`)
    }

}