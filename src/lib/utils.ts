export function range(
  start: number,
  stop?: number,
  step: number = 1
): number[] {

  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  return Array.from(
    { length: (stop - start) / step },
    (_, i) => start + i * step
  );

}
