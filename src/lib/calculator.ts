/**
 * 入力キューから答えを計算する
 * @param queue 入力キュー
 * @returns 答え
 */
export function calcAll(queue: string[]) {
  const list = [...queue];

  let i = list.findIndex(isOP);
  while (i != -1) {
    const op = list[i];
    const s1 = list[i-1];
    const s2 = list[i+1];
    const reduce = calc(op, s1, s2);

    list.splice(i-1, 3, reduce.toString());
    i = list.findIndex(isOP);
  }

  return parseFloat(list[0]);
}

/**
 * 演算子と数字２つから答えを計算する
 * @param op 演算子
 * @param s1 数字1
 * @param s2 数字2
 * @returns 答え
 */
export function calc(op: string, s1: string, s2: string) {
  const n1 = parseFloat(s1);
  const n2 = parseFloat(s2);

  switch (op) {
    case "+": return n1 + n2;
    case "-": return n1 - n2;
    case "x": return n1 * n2;
    case "÷": return n1 / n2;
    default: return NaN;
  }

}

/**
 * 文字を演算子か判定する
 * @param s 文字
 * @returns 演算子ならtrue
 */
export function isOP(s: string) {
  switch (s) {
    case "+":
    case "-":
    case "x":
    case "÷":
      return true
    default:
      return false;
  }
}