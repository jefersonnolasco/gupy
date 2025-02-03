
export class Test5 {

    constructor() {
        const texto = 'RIO DE JANEIRO'
        console.log(`--------- TEST 5 ---------`)
        console.log(`String original.........${texto}`)
        console.log(`String invertida.........${this.inverterCaracteres(texto)}`)
    }

    inverterCaracteres(s: string): string {
        return s.split('').reverse().join('')
    }


}