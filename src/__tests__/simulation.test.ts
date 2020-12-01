import { System } from '../simulation'
import { fresh } from '../simulation'
import { position } from '../simulation'

describe('fresh', () => {
  const system: System = fresh()

  test('it puts sun at the center', () => {
    expect(position('sun')(system)).toEqual([0, 0])
  })

  test('it puts mercury ad 0.4 au from sun', () => {
    expect(position('mercury')(system)).toEqual([0.4, 0])
  })
})
