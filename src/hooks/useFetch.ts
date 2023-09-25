import { useEffect, useState } from 'react'

interface IFetch<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

function useFetch<T>(url: string): IFetch<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)

        if (!response.ok) throw new Error('Erro ao carregar a api!')

        const dataInJson = await response.json()
        setData(dataInJson)
        setLoading(false)
      } catch (e) {
        setError(e as null)
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
