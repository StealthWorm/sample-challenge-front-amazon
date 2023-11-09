import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'

// default layout avoids calling the same component multiple times in different pages
export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
