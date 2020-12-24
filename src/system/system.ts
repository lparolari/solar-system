import { Point2D } from '../point'
import { Entity } from './entity'

// Entità supportate nel nostro sistema.
export type Sun = 'sun'
export type Planet = 'mercury' | 'venus' | 'earth'
export type Name = Sun | Planet

/** Un sistema è una collezione di entità. */
export type System = {
  entities: Entity[]
}

/** Costruisce un sistema e lo restituisce. */
export function makeSystem(es: Entity[]): System {
  return { entities: es }
}

/**
 * Restituisce l'indice del pianeta `planet`.
 *
 * Nota: gli indici sono fissati:
 *  * 0: sole
 *  * 1: mercurio
 *  * 2: venere
 *  * 3: terra
 *  * altro: restituisce un errore
 */
function idx(planet: Planet): number {
  if (planet === 'mercury') return 1
  if (planet === 'venus') return 2
  if (planet === 'earth') return 3
  throw Error('Invalid planet name')
}

/**
 * Restituisce la posizione (punto 2D) del pianeta `planet`
 * nel sistema `system`.
 */
export const position = (system: System, planet: Planet): Point2D => {
  return system.entities[idx(planet)].position
}
