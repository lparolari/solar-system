import { rotate } from './rotate'
import { Entity } from './system/entity'
import { fresh } from './system/factory'
import { makeSystem, System } from './system/system'

const tick = 0.0174533

export type Simulation = Generator<System, System, System>

function forwardEntity(tick: number, e: Entity): Entity {
  return {
    ...e,
    position: rotate(tick * e.rotationSpeed, e.position),
  }
}

function forwardEntities(es: Entity[]): Entity[] {
  return es.map((e) => forwardEntity(tick, e))
}

export function once(system: System): System {
  return makeSystem(forwardEntities(system.entities))
}

/* istanbul ignore next */
export const simulate = function* (): Simulation {
  let system = fresh
  while (true) {
    yield system
    system = once(system)
  }
}
