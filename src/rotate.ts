import { getX, getY, makePoint, Point2D } from './point'

export type Radiant = number

/**
 * Ruota di `angle` radianti il punto `point` e restituisce
 * il punto ruotato.
 */
export function rotate(angle: Radiant, point: Point2D): Point2D {
  const x = getX(point)
  const y = getY(point)

  const s = Math.sin(angle)
  const c = Math.cos(angle)

  const xnew = x * c - y * s
  const ynew = x * s + y * c

  return makePoint(xnew, ynew)
}
