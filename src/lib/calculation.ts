import { Operator } from "./definitions";

/**
 * 入力配列から解を計算する
 * @param input 入力配列
 * @returns 解
 */
export function resolveAll(input: string[]) {
  // 入力配列をコピー
  const draft = [...input];

  // 演算子の位置を探す
  let pos = findOperator(draft);
  while (pos != -1) {
    // 演算子と前後の数字から解を算出
    const op = draft[pos];
    const s1 = draft[pos - 1];
    const s2 = draft[pos + 1];
    const reduced = resolve(op, s1, s2);

    // 演算子と数字2つを解に置き換える
    draft.splice(pos - 1, 3, reduced.toString());

    // 次の演算子の位置を探す
    pos = findOperator(draft);
  }

  // 最終的に残った要素を解とする
  return parseFloat(draft[0]);
}

/**
 * 入力配列から演算子を探す
 * @param input 入力配列
 * @returns 演算子の位置
 */
export function findOperator(input: string[]) {
  // 掛け算割り算を検索
  const posMulDiv = input.findIndex(s =>
    s == Operator.Multi || s == Operator.Divid
  );
  if (posMulDiv != -1) {
    return posMulDiv;
  }
  // 足し算引き算を検索
  const posAddSub = input.findIndex(s =>
    s == Operator.Plus || s == Operator.Minus
  );
  return posAddSub;
}

/**
 * 演算子と数字２つから答えを計算する
 * @param op 演算子
 * @param s1 数字1
 * @param s2 数字2
 * @returns 答え
 */
export function resolve(op: string, s1: string, s2: string) {
  const n1 = parseFloat(s1);
  const n2 = parseFloat(s2);

  switch (op) {
    case Operator.Plus: return n1 + n2;
    case Operator.Minus: return n1 - n2;
    case Operator.Multi: return n1 * n2;
    case Operator.Divid: return n1 / n2;
    default: return NaN;
  }

}

/**
 * 文字を演算子か判定する
 * @param str 文字
 * @returns 演算子ならtrue
 */
export function isOperator(str: string) {
  switch (str) {
    case Operator.Plus:
    case Operator.Minus:
    case Operator.Multi:
    case Operator.Divid:
      return true
    default:
      return false;
  }
}