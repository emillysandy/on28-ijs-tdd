const checkEvenNumber = require('./numeroPar')

describe("Validando função número par", () => {
    test("Verifcar se é número par", () => {
        expect(checkEvenNumber(2)).toEqual("2 é um número par")
    })
    
    test("Verifcar se é número ímpar", () => {
        expect(checkEvenNumber(3)).toEqual("3 é um número ímpar")
    })
    
    test("Verifcar se é um número", () => {
        expect(checkEvenNumber("a")).toEqual("a não é um número")
    })
})
