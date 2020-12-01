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

export type Config = {
  tick: number
}

export type Simulation = Generator<System, System, System>

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
