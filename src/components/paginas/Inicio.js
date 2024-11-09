import React from 'react'
import Carrusel from '../Carrusel'

const Inicio = () => {
  return (
    <div>
      <Carrusel />

      <div className="jumbotron text-center">
        <h1 className="display-4">Bienvenidos a mi Página</h1>
        <p className="lead">aprendiendo react api.</p>
        <hr className="my-4" />
        <p>Anthony Oskar Gerardy Sub Coy</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">mas información</a>
      </div>

    </div>
  )
}

export default Inicio
