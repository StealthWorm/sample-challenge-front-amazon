import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'

/* 
  definition of routes, in that case I have my default layout that involves my routes,
  ensuring that all routes will be able to see my header component instantiated in the DefaultLayout component 
*/
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}