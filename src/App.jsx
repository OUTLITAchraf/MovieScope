import ListMovies from "./components/ListMovies"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
    <header className="lg:mx-15 py-3">
      <NavBar/>
    </header>
    <main className="mx-16 my-10">
      <ListMovies/>
    </main>
    <footer></footer>
    </>
  )
}

export default App
