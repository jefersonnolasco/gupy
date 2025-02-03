
const SP = 67836.43  
const RJ = 36678.66
const MG = 29229.88
const ES = 27165.48
const OUTROS = 19849.53

export class Test4 {

    constructor() {
        const soma = SP + RJ + MG + ES + OUTROS
        console.log(`--------- TEST 4 ---------`)
        console.log(`SP.........${(SP / soma *100).toFixed(2)}%`)
        console.log(`RJ.........${(RJ / soma *100).toFixed(2)}%`)
        console.log(`MG.........${(MG / soma *100).toFixed(2)}%`)
        console.log(`ES.........${(ES / soma *100).toFixed(2)}%`)
        console.log(`OUTROS.....${(OUTROS / soma *100).toFixed(2)}%`)
    }
}