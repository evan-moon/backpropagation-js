export function sigmoid (x: number, deff = false): number {
  if (deff) {
    return sigmoid(x) * (1 - sigmoid(x));
  } else {
    return 1 / (1 + Math.exp(-x));
  }
}

export function MeanSquaredError (targets: number[], values: number[]): number {
  if (targets.length !== values.length) {
    throw new Error('target and value must have same length!');
  }

  let result: number = 0;
  targets.forEach((t: number, i: number) => {
    result += ((t - values[i]) ** 2);
  });
  result *= (1 / targets.length);

  return result;
}

export function MeanSquaredErrorPrimes (targets: number[], values: number[]): number[] {
  return targets.map((t: number, i: number) => -(t - values[i]));
}

/**
 * @function multiplation
 * @param { number[] } m
 * @param { number[] } n
 * @desc m은 행벡터로 취급하고 n은 transpost하여 열벡터로 취급하여 행렬곱 진행
 * [[x1, x2]] x [[w1], [w2]] = x1w1 + x2w2
 */
export function multiplation (m: number[], n: number[]) {
  if (m.length !== n.length) {
    throw new Error(`m.length = ${m.length}, n.length = ${n.length}. Can't multiplation! They must have same length`);
  }
  let result: number = 0;
  m.forEach((v, i) => {
    result += (v * n[i]);
  });
  return result;
}
