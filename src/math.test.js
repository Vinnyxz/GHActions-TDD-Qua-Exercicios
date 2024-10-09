

const { fatorial, fibonacci, ehPrimo } = require('./math');

describe('Testes das funções matemáticas', () => {
    

    describe('fatorial', () => {
        test('fatorial de 0 deve ser 1', () => {
            expect(fatorial(0)).toBe(1);
        });
        
        test('fatorial de 1 deve ser 1', () => {
            expect(fatorial(1)).toBe(1);
        });
        
        test('fatorial de 5 deve ser 120', () => {
            expect(fatorial(5)).toBe(120);
        });

        test('fatorial de números negativos deve lançar erro', () => {
            expect(() => fatorial(-1)).toThrow("O fatorial não está definido para números negativos.");
        });
    });

 
    describe('fibonacci', () => {
        test('fibonacci de 0 deve ser 0', () => {
            expect(fibonacci(0)).toBe(0);
        });

        test('fibonacci de 1 deve ser 1', () => {
            expect(fibonacci(1)).toBe(1);
        });

        test('fibonacci de 5 deve ser 5', () => {
            expect(fibonacci(5)).toBe(5);
        });

        test('fibonacci de números negativos deve lançar erro', () => {
            expect(() => fibonacci(-1)).toThrow("O índice Fibonacci não pode ser negativo.");
        });
    });


    describe('ehPrimo', () => {
        test('0 não é primo', () => {
            expect(ehPrimo(0)).toBe(false);
        });

        test('1 não é primo', () => {
            expect(ehPrimo(1)).toBe(false);
        });

        test('2 é primo', () => {
            expect(ehPrimo(2)).toBe(true);
        });

        test('3 é primo', () => {
            expect(ehPrimo(3)).toBe(true);
        });

        test('4 não é primo', () => {
            expect(ehPrimo(4)).toBe(false);
        });

        test('11 é primo', () => {
            expect(ehPrimo(11)).toBe(true);
        });

        test('números negativos não são primos', () => {
            expect(ehPrimo(-5)).toBe(false);
        });
    });
});
