import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from '../pages/About/About'
import BlogDetails from '../pages/BlogDetails/BlogsDetails'
import Blogs from '../pages/Blogs/Blogs'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails'
import Projects from '../pages/Projects/Projects'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/blogId" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
