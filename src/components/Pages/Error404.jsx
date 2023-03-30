import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className='error404'>
      <div className='container text-center mensaje'>
        <p className= 'fs-3'> <b className='error-mensaje'>Esta página no existe</b> <i className='mensaje'>Haga click <Link to='/'>Aqui</Link> para volver al inicio </i></p>
      </div>
    </div>
  )
}
