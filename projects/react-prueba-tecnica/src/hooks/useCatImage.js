import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageurl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => {
        if (res.ok) {
          return res.blob()
        }
        throw new Error('No llegó el objeto.')
      })
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob)
        setImageurl(imageUrl)
      })
  }, [fact])

  return { imageUrl }

  // [] -> solo la primera vez
  // null -> Cada vez que se renderiza se ejecuta
  // [1] -> la primera vez y cuando el valor de la depe. cambia
}
