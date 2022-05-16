export function verse(index: number): string {
  return `${index} bottles of beer on the wall, ${index} bottles of beer.
Take one down and pass it around, ${index  - 1 } bottles of beer on the wall.
`;
}

export function sing(
  initialBottlesCount?: unknown,
  takeDownCount?: unknown
): unknown {
  throw new Error('Remove this statement and implement this function')
}
