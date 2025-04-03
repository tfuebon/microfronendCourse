import { useState, lazy, Suspense } from 'react'
import { Navbar } from 'navbar/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//import { AboutPage, HomePage, NotFound, PersonajesPage } from './pages/'
import { Loader } from './components/Loader'
//import './App.css'
import { NotFound } from './pages/NotFound'

//const HomePage = lazy(() => import('./pages/HomePage'))
const HomePage = lazy(async () => {
  const module = await import('./pages/HomePage'); // Importa el módulo
  return { default: module.HomePage };            // Ajusta la exportación nombrada
});

const PersonajesPage = lazy(async () => {
  const module = await import('./pages/PersonajesPage');
  return { default: module.PersonajesPage };
});

const AboutPage = lazy(async () => {
  const module = await import('./pages/AboutPage');
  return { default: module.AboutPage };
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='fixed top-0 left-0 right-0'>
        <Navbar />
        {/*<Loader/>*/}
        <Routes>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            } 
          />
          <Route 
            path="/personajes" 
            element={
              <Suspense fallback={<Loader />}>
                <PersonajesPage />
              </Suspense>
            } 
          />
          <Route 
            path="/personajes/:id" 
            element={
              <Suspense fallback={<Loader />}>
                <PersonajesPage />
              </Suspense>
            } 
          />
          <Route 
            path="/about" 
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            } 
          />
          <Route path='*' element={<Navigate to='/' />} />
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
