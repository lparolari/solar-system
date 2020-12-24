import { makePoint } from '../point'
import { makeEntity } from './entity'
import { makeSystem, System } from './system'

export const freshSun = makeEntity(0, makePoint(0, 0))
export const freshMercury = makeEntity(4.1477, makePoint(0.4, 0))
export const freshVenus = makeEntity(1.502, makePoint(0.7, 0))
export const freshEarth = makeEntity(1, makePoint(1, 0))

/**
 * Restituisce un nuovo sistema costituito da sole,
 * mercurio, venere, terra.
 */
export const fresh: System = makeSystem([freshSun, freshMercury, freshVenus, freshEarth])
