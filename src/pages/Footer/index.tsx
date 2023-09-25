function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <p>
            &copy; {new Date().getFullYear()} Filmes Online. Todos direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
