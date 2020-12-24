import { Point2D } from '../point'

/** Velocità di rotazione dell'entità */
export type Speed = number

/** Un'entità del sistema */
export type Entity = {
  position: Point2D
  rotationSpeed: Speed
}

/**
 * Costruisce una nuova entità data la sua velocità di rotazione `rotationSpeed`
 * e la sua posizione `position` e la restituisce.
 */
export function makeEntity(rotationSpeed: Speed, position: Point2D): Entity {
  return {
    rotationSpeed: rotationSpeed,
    position: position,
  }
}

/** Restituisce la posizione dell'entità `entity`. */
export function getPosition(entity: Entity): Point2D {
  return entity.position
}

/** Restituisce la velocità di rotazione dell'entità `entity`. */
export function getRotationSpeed(entity: Entity): Speed {
  return entity.rotationSpeed
}
