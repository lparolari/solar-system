import { freshMercury, freshSun } from '../factory'
import { makeSystem } from '../system'

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

// TODO: test idx
