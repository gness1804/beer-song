export function verse(index: number): string {
  if (index === 1) return `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
if (index === 0) return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
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
