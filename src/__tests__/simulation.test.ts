import { getX, getY } from '../point'
import { rotate } from '../rotate'
import * as Simulation from '../simulation'

const once = Simulation.once(Simulation.cfg())
const simulate = Simulation.simulate(Simulation.cfg())

describe('fresh', () => {
  const system: Simulation.System = Simulation.fresh()

  test('it puts sun at the center', () => {
    expect(Simulation.position('sun')(system)).toEqual([0, 0])
  })

  test('it puts mercury ad 0.4 au from sun', () => {
    expect(Simulation.position('mercury')(system)).toEqual([0.4, 0])
  })
})

describe('once', () => {
  test('it rotates entity by one step from fresh', () => {
    const system: Simulation.System = Simulation.fresh()
    const rotatedSystem: Simulation.System = {
      entities: [
        { position: [0, 0], rotationSpeed: 0 },
        { position: rotate(0.0174533 * 4.1477)([0.4, 0]), rotationSpeed: 4.1477 },
      ],
    }

    expect(once(system)).toEqual(rotatedSystem)
  })

  test('it rotates entity by one step from first step', () => {
    const system: Simulation.System = {
      entities: [
        { position: [0, 0], rotationSpeed: 0 },
        { position: rotate(0.0174533 * 4.1477)([0.4, 0]), rotationSpeed: 4.1477 },
      ],
    }

    const rotatedSystem: Simulation.System = {
      entities: [
        { position: [0, 0], rotationSpeed: 0 },
        { position: rotate(0.0174533 * 4.1477)(Simulation.position('mercury')(system)), rotationSpeed: 4.1477 },
      ],
    }

    expect(once(system)).toEqual(rotatedSystem)
  })
})

describe('simulate', () => {
  test('it returns first step equal to `once(fresh())`', () => {
    const sExpected = once(Simulation.fresh())

    const iter = simulate()
    iter.next() // fresh()
    const curr = iter.next() // once(fresh())

    // FIXME: We may use custom matcher
    expect(getX(curr.value.entities[1].position)).toBeCloseTo(getX(sExpected.entities[1].position))
    expect(getY(curr.value.entities[1].position)).toBeCloseTo(getY(sExpected.entities[1].position))
  })
})
