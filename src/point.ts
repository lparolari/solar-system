/** La singola coordinata */
export type Coord = number

/**
 * Un punto 2D è una tupla di due elementi dove il primo rappresenta
 * la coordinata x del punto e il secondo la coordinata y del punto.
 *
 * **Suggerimento**: [1, 2] è un `Point2D`.
 *
 * **Suggerimento**:
 *
 * Sia p una variabile di tipo `Point2D`.
 * Allora
 *   con `p[0]` si accede alla componente x del punto
 *   con `p[1]` si accede alla componente y del punto
 */
export type Point2D = [Coord, Coord]

/**
 * Costruisce un punto 2D date `x` e `y`.
 */
export function makePoint(x: Coord, y: Coord): Point2D {
  // DA IMPLEMENTARE (~ 1 riga di codice)
}

/**
 * Accede alla componente *x* del punto `p` e la restituisce.
 */
export function getX(p: Point2D): Coord {
  // DA IMPLEMENTARE (~ 1 riga di codice)
}

/**
 * Accede alla componente *y* del punto `p` e la restituisce.
 */
export function getY(p: Point2D): Coord {
  // DA IMPLEMENTARE (~ 1 riga di codice)
}
