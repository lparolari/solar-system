import { makePoint } from '../../point'
import { makeEntity } from '../entity'
import { fresh, freshEarth, freshMercury, freshSun, freshVenus } from '../factory'
import { makeSystem } from '../system'

describe('freshes', () => {
  describe('freshSun', () => {
    test('it returns an entity with sun rotation in position 0,0', () => {
      expect(freshSun).toEqual(makeEntity(0, makePoint(0, 0)))
    })
  })

  describe('freshMercury', () => {
    test('it returns an entity with mercury rotation in position 0.4,0', () => {
      expect(freshMercury).toEqual(makeEntity(4.1477, makePoint(0.4, 0)))
    })
  })

  describe('freshVenus', () => {
    test('it returns an entity with venus rotation in position 0.7,0', () => {
      expect(freshVenus).toEqual(makeEntity(1.502, makePoint(0.7, 0)))
    })
  })

  describe('freshErath', () => {
    test('it returns an entity with earth rotation in position 1,0', () => {
      expect(freshEarth).toEqual(makeEntity(1, makePoint(1, 0)))
    })
  })
})

describe('fresh', () => {
  test('it returns a system with sun, mercury, venus, earth as entities', () => {
    expect(fresh).toEqual(makeSystem([freshSun, freshMercury, freshVenus, freshEarth]))
  })
})
