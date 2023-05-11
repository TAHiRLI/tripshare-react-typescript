import React from 'react'
import pagesData from './pagesData'
import { routerType } from '../types/router.types'
import { Route } from 'react-router-dom'

const Router:React.FC = ()=> {
    const pageRoutes = pagesData.map(({path,title,element}:routerType) =>{
        return <Route key={title} path={`/${path}`} >
            {element}
        </Route>
    })


  return (
    <>{pageRoutes}</>
  )
}

export default Router