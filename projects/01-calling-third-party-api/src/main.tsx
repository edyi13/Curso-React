import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, PokeDetails, PokemonByName } from './pages/index.ts'
import './index.scss'
import PokemonProvider from './context/PokemonContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/:pokeId',
    element: <PokeDetails /> 
  },
  {
    path: '/pokemonByName',
    element: <PokemonByName />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PokemonProvider>
    <RouterProvider router={router}/>
  </PokemonProvider>
)
