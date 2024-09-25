import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Header from './Header'
import Home from './Home'
import Introduce from './Introduce'
import Fan from './Fan'
import Footer from './Footer'
import './css/header.css'
import './css/footer.css'
import './css/reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
    <Introduce />
    <Fan works={10} experience={1} certificate={17}/>
    <Footer />
  </StrictMode>,
  )
