import { Galeria } from "./components/Galeria"
import { Header } from "./components/header"
import Inicio from "./components/Inicio"
import { ItmeListContainer } from "./components/ItmeListContainer"


function App() {
  
  return (
    <>
   <Header/>
   <Inicio/>
   <Galeria/>
   <ItmeListContainer mensaje={"Bienvenidos a Nuestra Pagina Web"}/>
  
      
    </>
  )
}

export default App
