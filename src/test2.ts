
const NUMERO = 22

export class Test2 {

  constructor() {
    this.pertenceFibonacci(NUMERO)
  }

  pertenceFibonacci(num: number): void {
    let a = 0, b = 1

    while (b < num) {
      const temp = b
      b = a + b
      a = temp
    }

    console.log(`--------- TEST 2 ---------`)
    
    if (b === num || num === 0) {
      console.log(`O número ${num} pertence à sequência de Fibonacci.`)
    } else {
      console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`)
    }
  }

}