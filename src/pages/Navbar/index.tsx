function Navbar() {
  return (
    <div className="flex sm:flex-col justify-between items-center flex-wrap w-full px-28 py-4 bg-blue-500 mb-4 sm:gap-1">
      <a className="text-white cursor-pointer hover:text-zinc-700 font-semibold">
        Filmes Online
      </a>
      <ul className="flex flex-row justify-center items-center sm:gap-6 gap-8 font-semibold">
        <li className="text-white cursor-pointer hover:border-b-2 border-red-700 ease-in-out duration-300">
          Favoritos
        </li>
        <li className="text-white cursor-pointer hover:border-b-2 border-red-700 ease-in-out duration-300">
          Desejo
        </li>
        <li className="text-white cursor-pointer hover:border-b-2 border-red-700 ease-in-out duration-300">
          Login
        </li>
      </ul>
    </div>
  )
}

export default Navbar
