const fatorial = (n) => {
  if (n == 0) return 1;
  return n * fatorial(n - 1);
};

const combinacao = (n, k) => {
  return fatorial(n) / (fatorial(k) * fatorial(n - k));
};

const disponibilidade = (n, k, p) => {
  let d = 0;

  for (let i = k; i <= n; i++) {
    d += combinacao(n, i) * p ** i * (1 - p) ** (n - i);
  }

  return d.toFixed(4);
};

console.log(disponibilidade(4, 1, 0.8));


