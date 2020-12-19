import { rotate } from './rotate'
import { Entity } from './system/entity'
import { fresh } from './system/factory'
import { makeSystem, System } from './system/system'

export type Config = {
  tick: number
}

export type Simulation = Generator<System, System, System>

const forwardEntity = (tick: number) => (e: Entity): Entity => ({
  ...e,
  position: rotate(tick * e.rotationSpeed)(e.position),
})

const forwardEntities = (tick: number) => (es: Entity[]): Entity[] => es.map(forwardEntity(tick))

const defaultConfig: Config = {
  tick: 0.0174533,
}

export const cfg = (c: Config = defaultConfig): Config => c

export const once = (config: Config) => (system: System): System =>
  makeSystem(forwardEntities(config.tick)(system.entities))

export const simulate = function (config: Config) {
  return function* (): Simulation {
    let system = fresh()
    while (true) {
      yield system
      system = once(config)(system)
    }
  }
}
