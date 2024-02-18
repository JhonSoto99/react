import { getRandomFact } from '../services/facts.js'
import { useEffect, useState } from 'react'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(() => {
    refreshFact()
  }, [])
  // [] -> solo la primera vez
  // null -> Cada vez que se renderiza se ejecuta
  // [1] -> la primera vez y cuando el valor de la depe. cambia
  return { fact, refreshFact }
}
