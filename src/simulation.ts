import _ from 'lodash'
import { makePoint, Point2D } from './point'
import { rotate } from './rotate'

export type Sun = 'sun'
export type Planet = 'mercury'
export type EntityId = Sun | Planet

export type Speed = number

export type Entity = {
  position: Point2D
  rotationSpeed: Speed
}

export type System = {
  entities: Entity[]
}

export const makeEntity = (rotationSpeed: Speed) => (position: Point2D): Entity => ({
  rotationSpeed: rotationSpeed,
  position: position,
})
export const makeSystem = (es: Entity[]): System => ({ entities: es })

export const makeSun = makeEntity(0)
export const makeMercury = makeEntity(4.1477)

const freshSun = makeSun(makePoint(0, 0))
const freshMercury = makeMercury(makePoint(0.4, 0))

export const fresh = (): System => makeSystem([freshSun, freshMercury])

const idx = (name: EntityId): number => {
  if (name === 'mercury') return 1
  return 0
}

export const position = (name: EntityId) => (system: System): Point2D => {
  return system.entities[idx(name)].position
}

const forwardEntity = (tick: number) => (e: Entity): Entity => ({
  ...e,
  position: rotate(tick * e.rotationSpeed)(e.position),
})

const forwardEntities = (tick: number) => (es: Entity[]): Entity[] => es.map(forwardEntity(tick))

export const once = (system: System): System => makeSystem(forwardEntities(0.0174533)(system.entities))

export const simulate = function* (): Generator<System, System, System> {
  let system = fresh()
  while (true) {
    yield system
    system = once(system)
  }
}
