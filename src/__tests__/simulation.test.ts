import { rotate } from '../rotate'
import { once } from '../simulation'
import { fresh } from '../system/factory'
import { position, System } from '../system/system'

// import { getX, getY } from '../point'
// import { rotate } from '../rotate'
// import * as Simulation from '../simulation'

// const once = Simulation.once(Simulation.cfg())
// const simulate = Simulation.simulate(Simulation.cfg())

// describe('fresh', () => {
//   const system: Simulation.System = Simulation.fresh()

//   test('it puts sun at the center', () => {
//     expect(Simulation.position('sun')(system)).toEqual([0, 0])
//   })

//   test('it puts mercury ad 0.4 au from sun', () => {
//     expect(Simulation.position('mercury')(system)).toEqual([0.4, 0])
//   })
// })

describe('once', () => {
  test('it rotates entity by one step from fresh', () => {
    const system = fresh
    const rotatedSystem: System = {
      entities: [
        { position: [0, 0], rotationSpeed: 0 },
        { position: rotate(0.0174533 * 4.1477, [0.4, 0]), rotationSpeed: 4.1477 },
      ],
    }

    expect(once(system)[1]).toEqual(rotatedSystem[1])
  })

  test('it rotates entity by one step from first step', () => {
    const system: System = {
      entities: [
        { position: [0, 0], rotationSpeed: 0 },
        { position: rotate(0.0174533 * 4.1477, [0.4, 0]), rotationSpeed: 4.1477 },
      ],
    }

    const rotatedSystem: System = {
      entities: [
        { position: [0, 0], rotationSpeed: 0 },
        { position: rotate(0.0174533 * 4.1477, position(system, 'mercury')), rotationSpeed: 4.1477 },
      ],
    }

    expect(once(system)).toEqual(rotatedSystem)
  })
})

// describe('simulate', () => {
//   test('it returns first step equal to `once(fresh())`', () => {
//     const sExpected = once

//     const iter = simulate()
//     iter.next() // fresh()
//     const curr = iter.next() // once(fresh())

//     // FIXME: We may use custom matcher
//     expect(getX(curr.value.entities[1].position)).toBeCloseTo(getX(sExpected.entities[1].position))
//     expect(getY(curr.value.entities[1].position)).toBeCloseTo(getY(sExpected.entities[1].position))
//   })
// })
