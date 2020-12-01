import _ from 'lodash'

export type Name = Sun | Planet
export type Sun = 'sun'
export type Planet = 'mercury'
export type Coord2D = [number, number]
export type Entity = {
  position: Coord2D
}
export type System = {
  enities: Entity[]
}

export const fresh = (): System => ({
  enities: [{ position: [0, 0] }, { position: [0.4, 0] }],
})

const idx = (name: Name): number => {
  if (name === 'mercury') return 1
  return 0
}

export const position = (name: Name) => (system: System): Coord2D => {
  return system.enities[idx(name)].position
}
