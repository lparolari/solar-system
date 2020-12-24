export type Coord = number
export type Point2D = [Coord, Coord]

export function makePoint(x: number, y: number): Point2D {
  return [x, y]
}

export function getX(p: Point2D): Coord {
  return p[0]
}
export function getY(p: Point2D): Coord {
  return p[1]
}
