const fs = require('fs')
const { DOMParser } = require('xmldom');
const xpath = require('xpath');

const path = require('path');

export interface IDayValue {
    dia: number
    valor: number
}

export class TestXml {

    jsonData: IDayValue[] = []
    total = 0
    maxValue = 0
    minValue = 999999999
    maxDay = 0
    minDay = 0
    average = 0

    constructor() {
        const file = path.resolve(__dirname,'data/xml_data.xml')
        const xmlData = fs.readFileSync(file, 'utf-8');
        const doc = new DOMParser().parseFromString(`<root>${xmlData}</root>`); 
        const rows = xpath.select('//row', doc);

        const results = rows.map((row:any) => {
            const dia = xpath.select1('string(dia)', row);
            const valor = xpath.select1('string(valor)', row);
            return { dia: parseInt(dia, 10), valor: parseFloat(valor) };
        });

        this.jsonData = results

        this.calculeResume()
        this.showResume()
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