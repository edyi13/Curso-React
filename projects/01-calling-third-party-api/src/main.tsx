import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PokemonByName } from './Components/PokemonByName.tsx'
import { Home, PokeDetail } from './pages/index.ts'
import './index.scss'
import PokemonProvider from './context/PokemonContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/:pokemonId',
    element: <PokeDetail /> 
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
