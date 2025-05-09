import './App.css'
import{Routes,Route, BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Card1 from './components/Card1';

function App() {
 
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Card1/>}/>
      <Route path='/dashboard' element={<Layout/>}/>

    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
