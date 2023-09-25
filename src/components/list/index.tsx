import { MoviesData } from '../../pages/List'
import ButtonCustom from '../button'

interface ListCustomProps {
  movies: Array<MoviesData>
}

function ListCustom({ movies }: ListCustomProps) {
  return movies.map((movie) => {
    return (
      <div
        className="bg-white shadow-md rounded-lg p-4 m-4 w-64"
        key={movie.id}
      >
        <img
          src={movie?.url}
          alt={'Fotos intessantes'}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2 h-40">{movie?.title}</h2>
        <div className="mt-4">
          <ButtonCustom text="Assistir Filme" />
        </div>
      </div>
    )
  })
}

export default ListCustom
