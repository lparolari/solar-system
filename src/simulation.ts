import _ from 'lodash'
import { Point2D } from './point'
import { rotate } from './rotate'

export type Sun = 'sun'
export type Planet = 'mercury'
export type EntityId = Sun | Planet

export type Entity = {
  position: Point2D
  rotationSpeed: number
}

export type System = {
  entities: Entity[]
}

export const fresh = (): System => ({
  entities: [
    { position: [0, 0], rotationSpeed: 0 },
    { position: [0.4, 0], rotationSpeed: 4.1477 },
  ],
})

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

export const once = (system: System): System => {
  const es: Entity[] = forwardEntities(0.0174533)(system.entities)
  return {
    entities: es,
  }
}

export const simulate = function* (): Generator<System, System, System> {
  let system = fresh()
  while (true) {
    yield system
    system = once(system)
  }
}
