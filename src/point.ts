export type Coord = number
export type Point2D = [Coord, Coord]

export const makePoint = (x: number, y: number): Point2D => [x, y]

export const getX = (p: Point2D): Coord => p[0]
export const getY = (p: Point2D): Coord => p[1]
