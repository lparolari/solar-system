import { getX, getY, makePoint, Point2D } from './point'

export type Radiant = number

/**
 * Ruota di `angle` radianti il punto `point` e restituisce
 * il punto ruotato.
 *
 * **Suggerimento**:
 *
 * Siano x, y le rispettive coordinate del punto `point`.
 * Siano s, c rispettivmente il seno ed il coseno di  `angle`.
 *
 * Allora
 *
 *   xnew = x * c - y * s
 *   ynew = x * s + y * c
 *
 * dove xnew e ynew sono rispettivamente le nuove coordinate x e y
 * del punto ruotato.
 *
 * **Suggerimento**: `Math.sin` e `Math.cos` calcolano rispettivamente il
 * seno ed il coseno dell'angolo in radianti fornito in input.
 */
export function rotate(angle: Radiant, point: Point2D): Point2D {
  // DA IMPLEMENTARE (~ 7 righe di codice)
}
