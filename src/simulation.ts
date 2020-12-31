import { rotate } from './rotate'
import { Entity } from './system/entity'
import { fresh } from './system/factory'
import { makeSystem, System } from './system/system'

/** Regola la velocità di rotazione delle entità. */
const tick = 0.0174533

/**
 * Ruota l'entità `entity` di un tick utilizzando la sua velocità di
 * rotazione e restituisce la nuova entità ruotata.
 *
 * Suggerimento: La rotazione dell'entità *e* è effettuata ruotando con la
 * funzione `rotate` la posizione di *e*, utilizzando come velocità la sua
 * `rotationSpeed` scalata però con la costante `tick`. Una volta ottenuta
 * la nuova posizione *np* basta restituire una nuova entità *e1* con
 * posizione *np* e `rotationSpeed` quella dell'entità *e*.
 */
function forwardEntity(entity: Entity): Entity {
  // DA IMPLEMENTARE (~ 4 righe di codice)
}

/**
 * Ruota tutte le entità nell'array `entities` e restituisce l'array
 * con le entità ruotate.
 *
 * Suggerimento: `entities.length` restituisce la lunghezza dell'array `entities`.
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
