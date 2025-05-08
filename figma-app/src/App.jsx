import './App.css'
import{Routes,Route, BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Card1 from './components/Card1';

function App() {
 
  return (
    <>
   {/* <div className='row w-100 '> 
      <div className='col-12 col-md-3 pe-0'>
      <SidePanel/>
      </div>
      <div className='col-12 col-md-6 p-0' style={{height:'593px'}}>
        <Center/>
      </div>
      <div className='col-12 col-md-3 p-0'>
        <RightPanel/>
      </div>

    
    </div>*/}
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
