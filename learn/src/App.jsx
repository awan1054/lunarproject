
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Single from './pages/Single'
import Create from './pages/Create'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/create' element={<Create/>} />
      <Route path ='/single' element={<Single/>} />
      <Route path ='/edit' element={<Edit/>} />
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
