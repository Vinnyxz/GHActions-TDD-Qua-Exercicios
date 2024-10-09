// src/Math.js

// Função para calcular o fatorial de um número
function fatorial(n) {
  if (n < 0) {
      throw new Error("O fatorial não está definido para números negativos.");
  }
  if (n === 0 || n === 1) {
      return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
      resultado *= i;
  }
  return resultado;
}

// Função para calcular o n-ésimo número de Fibonacci
function fibonacci(n) {
  if (n < 0) {
      throw new Error("O índice Fibonacci não pode ser negativo.");
  }
  if (n === 0) {
      return 0;
  }
  if (n === 1) {
      return 1;
  }
  let a = 0;
  let b = 1;
  let resultado = 0;
  for (let i = 2; i <= n; i++) {
      resultado = a + b;
      a = b;
      b = resultado;
  }
  return resultado;
}

// Função para verificar se um número é primo
function ehPrimo(num) {
  if (num <= 1) return false; // 0 e 1 não são primos
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

// Exportar as funções
module.exports = {
  fatorial,
  fibonacci,
  ehPrimo,
};
