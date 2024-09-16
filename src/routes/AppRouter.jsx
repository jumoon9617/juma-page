import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Projects from '../pages/Projects'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
