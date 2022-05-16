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
  initialBottlesCount: number = 99,
  takeDownCount: number = 0,
): string {
  let res = '';
  let currentBottlesCount = initialBottlesCount;
  while (currentBottlesCount >= takeDownCount) {
    res += `${verse(currentBottlesCount)}`;
    currentBottlesCount--;
  }
  return res;
}
