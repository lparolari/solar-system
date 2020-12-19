import { Point2D } from '../point'

export type Speed = number

export type Entity = {
  position: Point2D
  rotationSpeed: Speed
}

export const makeEntity = (rotationSpeed: Speed) => (position: Point2D): Entity => ({
  rotationSpeed: rotationSpeed,
  position: position,
})

export const getPosition = (entity: Entity): Point2D => entity.position

export const getRotationSpeed = (entity: Entity): Speed => entity.rotationSpeed
