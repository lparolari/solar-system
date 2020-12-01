import { makePoint } from '../point'
import { getX } from '../point'
import { getY } from '../point'

describe('makePoint', () => {
  test('it makes a new 2d point', () => {
    expect(makePoint(1, 1)).toEqual([1, 1])
  })
})

describe('coords', () => {
  const p = makePoint(1, 2)
  describe('getX', () => {
    test('it returns x coord of point', () => {
      expect(getX(p)).toBe(1)
    })
  })
  describe('getY', () => {
    test('it returns y coord of point', () => {
      expect(getY(p)).toBe(2)
    })
  })
})
