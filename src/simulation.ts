import { rotate } from './rotate'
import { Entity } from './system/entity'
import { fresh } from './system/factory'
import { makeSystem, System } from './system/system'

/** Regola la velocità di tick */
const tick = 0.0174533

/**
 * Ruota l'entità `entity` di un tick utilizzando la sua velocità di
 * rotazione e restituisce la nuova entità ruotata.
 */
function forwardEntity(entity: Entity): Entity {
  // DA IMPLEMENTARE (~ 4 righe di codice)

/**
 * Ruota tutte le entità nell'array `entities` e restituisce l'array
 * con le entità ruotate.
 */
function forwardEntities(entities: Entity[]): Entity[] {
  // DA IMPLEMENTARE (~ 4 righe di codice)
}

/**
 * Esegue la rotazione delle entità contenute nel sistema `system`
 * e ne restituisce il nuovo sistema con le entità nelle nuove posizioni.
 */
export function once(system: System): System {
  // DA IMPLEMENTARE (~ 1 riga di codice)
}

export type Simulation = Generator<System, System, System>

/**
 * Simula il sistema
 *
 * Attenzione: questa funzione usa una struttura che non abbiamo
 * ancora visto, ignorare, non serve per l'esercizio.
 */
/* istanbul ignore next */
export const simulate = function* (): Simulation {
  let system = fresh
  while (true) {
    yield system
    system = once(system)
  }
}
