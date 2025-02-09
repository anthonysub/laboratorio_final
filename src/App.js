import React from 'react'
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'

import Formulario from './components/paginas/Formulario'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/formulario' element={<Formulario/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
