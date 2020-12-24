import { Point2D } from '../point'
import { Entity } from './entity'

export type Sun = 'sun'
export type Planet = 'mercury' | 'venus' | 'earth'
export type Name = Sun | Planet

export type System = {
  entities: Entity[]
}

export function makeSystem(es: Entity[]): System {
  return { entities: es }
}

function idx(planet: Planet): number {
  if (planet === 'mercury') return 1
  if (planet === 'venus') return 2
  if (planet === 'earth') return 3
  throw Error('Invalid planet name')
}

export const position = (system: System, planet: Planet): Point2D => {
  return system.entities[idx(planet)].position
}
