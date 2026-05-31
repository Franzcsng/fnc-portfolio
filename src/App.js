import './App.css';
import Layout from './pages/layout/Layout.js'
import Home from './pages/home/Home.js'
import About from './pages/about/About.js'
import Projects from './pages/projects/Projects.js'
import Resume from './pages/resume/Resume.js'
import Contact from './pages/contact/Contact.js'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}/>
}

export default App;
