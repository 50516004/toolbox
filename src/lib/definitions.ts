export const Point = ".";

export enum Operator {
  Plus = "+",
  Minus = "-",
  Multi = "×",
  Divid = "÷",
}

export type Consumer<T> = (t : T) => void;