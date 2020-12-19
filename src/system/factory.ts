import { makePoint } from '../point'
import { makeEntity } from './entity'
import { makeSystem, System } from './system'

export const makeSun = makeEntity(0)
export const makeMercury = makeEntity(4.1477)
export const makeVenus = makeEntity(1.502)
export const makeEarth = makeEntity(1)

const freshSun = makeSun(makePoint(0, 0))
const freshMercury = makeMercury(makePoint(0.4, 0))
const freshVenus = makeVenus(makePoint(0.7, 0))
const freshEarth = makeVenus(makePoint(1, 0))

export const fresh = (): System => makeSystem([freshSun, freshMercury, freshVenus, freshEarth])
