

export class Test1 {

    constructor() {
      let INDICE = 13
      let SOMA = 0
      let K = 0

      while (K < INDICE) {
        K++
        SOMA += K
      }

      console.log(`--------- TEST 1 ---------`)
      console.log('SOMA....:',SOMA)
    }
}