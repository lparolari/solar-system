import { makePoint } from '../../point'
import { fresh, freshMercury, freshSun } from '../factory'
import { makeSystem, Planet, position } from '../system'

describe('makeSystem', () => {
  test('it creates an empty system', () => {
    expect(makeSystem([])).toEqual({ entities: [] })
  })

  test('it creates a system with some entities', () => {
    const e1 = freshSun
    const e2 = freshMercury

    expect(makeSystem([e1, e2])).toEqual({ entities: [e1, e2] })
    expect(makeSystem([e1, e2])).not.toEqual({ entities: [e2, e1] })
  })
})

describe('position', () => {
  test('it returns the position of the planet with name in list', () => {
    expect(position(fresh, 'mercury')).toEqual(makePoint(0.4, 0))
    expect(position(fresh, 'venus')).toEqual(makePoint(0.7, 0))
    expect(position(fresh, 'earth')).toEqual(makePoint(1, 0))
    expect(() => position(fresh, ('aaa' as any) as Planet)).toThrowError('Invalid planet name')
  })
})

// TODO: test idx
