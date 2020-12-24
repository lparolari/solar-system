import { Point2D } from '../point'

export type Speed = number

export type Entity = {
  position: Point2D
  rotationSpeed: Speed
}

export function makeEntity(rotationSpeed: Speed, position: Point2D): Entity {
  return {
    rotationSpeed: rotationSpeed,
    position: position,
  }
}

export function getPosition(entity: Entity): Point2D {
  return entity.position
}

export function getRotationSpeed(entity: Entity): Speed {
  return entity.rotationSpeed
}
