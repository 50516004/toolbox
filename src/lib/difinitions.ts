import { Dispatch, SetStateAction } from "react";

// 使ってない
export type Handler<T> = Dispatch<SetStateAction<T>>;