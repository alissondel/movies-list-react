import { useState, useEffect, ChangeEvent } from 'react'

import InputCustom from '../../components/input'
import { Movies } from '../../constants'
import useFetch from '../../hooks/useFetch'
import ButtonCustom from '../../components/button'
import ListCustom from '../../components/list'

export interface MoviesData {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

function List() {
  const { data, loading, error } = useFetch<MoviesData[] | null>(Movies)

  const [movies, setMovies] = useState<MoviesData[]>([])
  const [allMovies, setAllMovies] = useState<MoviesData[]>([])
  const [page, setPage] = useState<number>(0)
  const [moviesPerPage] = useState<number>(12)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (data) {
      setMovies(data?.slice(0, moviesPerPage))
      setAllMovies(data)
    }
  }, [data, moviesPerPage])

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error.message}</p>

  function loadMoreMovies() {
    const nextPage = page + moviesPerPage
    const nextMovies = allMovies.slice(nextPage, nextPage + moviesPerPage)
    movies.push(...nextMovies)

    setMovies(movies)
    setPage(nextPage)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  const filteredMovies = searchValue
    ? allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : movies

  return (
    <>
      <div className="flex flex-wrap justify-center p-4 mb-4">
        <div className="flex justify-center items-center w-full mx-20">
          <InputCustom handleChange={handleChange} searchValue={searchValue} />
        </div>
        {filteredMovies.length === 0 && (
          <p>Não existem filmes encontrados...</p>
        )}
        {filteredMovies.length > 0 && (
          <ListCustom movies={filteredMovies} setMovies={setMovies} />
        )}
      </div>
      <div className="flex justify-center items-center mb-8">
        <ButtonCustom
          text="Ver Mais"
          onClick={loadMoreMovies}
          disabled={page + moviesPerPage >= allMovies.length}
        />
      </div>
    </>
  )
}

export default List
