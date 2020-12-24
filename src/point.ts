// Una coordinata del punto è semplicemente un numero
export type Coord = number

// Un punto 2D è una tupla
export type Point2D = [Coord, Coord]

/**
 * Costruisce un punto 2D date `x` e `y`.
 */
export function makePoint(x: number, y: number): Point2D {
  return [x, y]
}

/** Accede alla componente *x* del punto `p` e la restituisce. */
export function getX(p: Point2D): Coord {
  return p[0]
}

/** Accede alla componente *y* del punto `p` e la restituisce. */
export function getY(p: Point2D): Coord {
  return p[1]
}
