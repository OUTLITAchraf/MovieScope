import ListMovies from "./components/ListMovies"
import NavBar from "./components/NavBar"
import NavBarFooter from "./components/NavBarFooter"

function App() {

  return (
    <>
    <header className="lg:mx-15 py-3">
      <NavBar/>
    </header>
    <main className="mx-16 my-10">
      <ListMovies/>
    </main>
    <footer className="flex flex-row items-center mx-15 pb-5 justify-between text-white text-lg">
      <NavBarFooter/>
    </footer>
    </>
  )
}

export default App
