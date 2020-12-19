import { Point2D } from '../point'
import { Entity } from './entity'

export type Sun = 'sun'
export type Planet = 'mercury' | 'venus'
export type Name = Sun | Planet

export type System = {
  entities: Entity[]
}

export const makeSystem = (es: Entity[]): System => ({ entities: es })

const idx = (planet: Planet): number => {
  if (planet === 'mercury') return 0
  if (planet === 'venus') return 1
  throw new Error('Invalid planet name')
}

export const position = (planet: Planet) => (system: System): Point2D => {
  return system.entities[idx(planet)].position
}
