import { getX, getY } from '../point'
import { rotate } from '../rotate'
import { System } from '../simulation'
import { fresh } from '../simulation'
import { position } from '../simulation'
import { once } from '../simulation'
import { simulate } from '../simulation'

describe('fresh', () => {
  const system: System = fresh()

  test('it puts sun at the center', () => {
    expect(position('sun')(system)).toEqual([0, 0])
  })

  test('it puts mercury ad 0.4 au from sun', () => {
    expect(position('mercury')(system)).toEqual([0.4, 0])
  })
})

describe('once', () => {
  test('it rotates entity by one step from fresh', () => {
    const system: System = fresh()
    const rotatedSystem: System = {
      entities: [
        { position: [0, 0], rotationSpeed: 0 },
        { position: rotate(0.0174533 * 4.1477)([0.4, 0]), rotationSpeed: 4.1477 },
      ],
    }

    expect(once(system)).toEqual(rotatedSystem)
  })

  test('it rotates entity by one step from first step', () => {
    const system: System = {
      entities: [
        { position: [0, 0], rotationSpeed: 0 },
        { position: rotate(0.0174533 * 4.1477)([0.4, 0]), rotationSpeed: 4.1477 },
      ],
    }

    const rotatedSystem: System = {
      entities: [
        { position: [0, 0], rotationSpeed: 0 },
        { position: rotate(0.0174533 * 4.1477)(position('mercury')(system)), rotationSpeed: 4.1477 },
      ],
    }

    expect(once(system)).toEqual(rotatedSystem)
  })
})

describe('simulate', () => {
  test('it returns first step equal to `once(fresh())`', () => {
    const sExpected = once(fresh())

    const iter = simulate()
    iter.next() // fresh()
    const curr = iter.next() // once(fresh())

    // FIXME: We may use custom matcher
    expect(getX(curr.value.entities[1].position)).toBeCloseTo(getX(sExpected.entities[1].position))
    expect(getY(curr.value.entities[1].position)).toBeCloseTo(getY(sExpected.entities[1].position))
  })
})
