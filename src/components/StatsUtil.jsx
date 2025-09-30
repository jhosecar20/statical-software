export function calcularMedia(data) {
  return data.reduce((a, b) => a + b, 0) / data.length;
}

export function calcularMaximo(data) {
  return Math.max(...data);
}

export function calcularMinimo(data) {
  return Math.min(...data);
}

export function calcularRango(data) {
  return calcularMaximo(data) - calcularMinimo(data);
}

export function calcularNumeroIntervalos(data) {
  return Math.floor(Math.log2(data.length));
}
