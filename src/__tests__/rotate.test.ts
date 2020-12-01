import { getX, getY, makePoint } from '../point'
import { rotate } from '../rotate'

describe('rotate', () => {
  const pInput = makePoint(1, 0)

  test('it rotates point by pi/2', () => {
    const pAcutal = rotate(Math.PI / 2)(pInput)
    const pExpected = makePoint(0, 1)

    expect(getX(pAcutal)).toBeCloseTo(getX(pExpected))
    expect(getY(pAcutal)).toBeCloseTo(getY(pExpected))
  })

  test('it rotates point by -pi/2', () => {
    const pAcutal = rotate(-Math.PI / 2)(pInput)
    const pExpected = makePoint(0, -1)

    expect(getX(pAcutal)).toBeCloseTo(getX(pExpected))
    expect(getY(pAcutal)).toBeCloseTo(getY(pExpected))
  })

  test('it rotates point by pi', () => {
    const pAcutal = rotate(Math.PI)(pInput)
    const pExpected = makePoint(-1, 0)

    expect(getX(pAcutal)).toBeCloseTo(getX(pExpected))
    expect(getY(pAcutal)).toBeCloseTo(getY(pExpected))
  })

  test('it rotates point by 2pi', () => {
    const pAcutal = rotate(2 * Math.PI)(pInput)
    const pExpected = makePoint(1, 0)

    expect(getX(pAcutal)).toBeCloseTo(getX(pExpected))
    expect(getY(pAcutal)).toBeCloseTo(getY(pExpected))
  })
})
