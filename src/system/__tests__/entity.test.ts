import { makePoint } from '../../point'
import { makeEntity, getPosition, getRotationSpeed } from '../entity'

describe('makeEntity', () => {
  test('it construct a valid entity', () => {
    expect(makeEntity(1, makePoint(2, 3))).toEqual({ rotationSpeed: 1, position: [2, 3] })
  })
})

describe('getters', () => {
  const p = makePoint(2, 3)
  const s = 1
  const e = makeEntity(s, p)

  describe('getPosition', () => {
    test('it returns the position', () => {
      expect(getPosition(e)).toEqual(p)
    })
  })

  describe('getRotationSpeed', () => {
    test('it returns the rotation speed', () => {
      expect(getRotationSpeed(e)).toEqual(s)
    })
  })
})
