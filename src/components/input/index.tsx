import { ChangeEvent } from 'react'

interface InputCustomProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  searchValue: string
}

function InputCustom({ handleChange, searchValue }: InputCustomProps) {
  return (
    <input
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Filtrar pelo nome do filme..."
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
    />
  )
}

export default InputCustom
