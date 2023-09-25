interface ButtonCustomProps {
  onClick?: () => void
  disabled?: boolean
  text: string
}

function ButtonCustom({ onClick, disabled, text }: ButtonCustomProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
    >
      {text}
    </button>
  )
}

export default ButtonCustom
