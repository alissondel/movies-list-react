import { Edit, Trash2 } from 'lucide-react'

import { MoviesData } from '../../pages/List'
import ButtonCustom from '../button'
import { useState } from 'react'
import Modal from '../modal'

interface ListCustomProps {
  movies: Array<MoviesData>
  setMovies: (items: MoviesData[]) => void
}

function ListCustom({ movies, setMovies }: ListCustomProps) {
  const [id, setId] = useState<number>(0)
  const [openModal, setOpenModal] = useState<boolean>(false)

  function handleOpenModal(idItem: number) {
    setId(idItem)
    setOpenModal(!openModal)
  }

  return movies.map((movie) => {
    return (
      <div key={movie.id}>
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64">
          <img
            src={movie?.url}
            alt={'Fotos intessantes'}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-2 h-40">{movie?.title}</h2>
          <div className="mt-4 flex flex-row justify-between items-center">
            <ButtonCustom text="Assistir Filme" />
            <div className="flex flex-row justify-center items-center gap-4">
              <button title="Editar">
                <Edit
                  size={24}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                />
              </button>
              <button title="Excluir">
                <Trash2
                  size={24}
                  onClick={() => handleOpenModal(movie.id)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
        {openModal === true && (
          <Modal
            openModal={openModal}
            setMovies={setMovies}
            movieId={id}
            movies={movies}
          />
        )}
      </div>
    )
  })
}

export default ListCustom
