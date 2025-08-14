import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ListMovies from "./components/ListMovies"
import NavBar from "./components/NavBar"
import NavBarFooter from "./components/NavBarFooter"
import DetailMovie from "./components/DetailMovie"
import SearchMovie from "./components/SearchMovie"

function App() {
  return (
    <>
      <Router>
        <header className="lg:mx-15 py-3">
          <NavBar onSearch={(value) => setSearchInput(value)} />
        </header>
        <main className="mx-16 my-10">
          <Routes>
            <Route path="/" element={<ListMovies/>}/>
            <Route path="/detail/:id" element={<DetailMovie/>}/>
            <Route path="/search/:query" element={<SearchMovie/>}/>
          </Routes>
        </main>
        <footer className="flex flex-row items-center mx-15 pb-5 justify-between text-white text-lg">
          <NavBarFooter />
        </footer>
      </Router>
    </>
  )
}

export default App
