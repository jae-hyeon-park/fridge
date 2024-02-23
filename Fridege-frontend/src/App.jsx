import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DetailPage from './DetailPage'
import Fridge from './Fridge'

import Header from './Header'
import StoreBody from './StoreBody'

function App() {


  return (
    <>
    <Header></Header>
    <Router>
      <Routes>
        <Route path='/food/:id' element={<DetailPage />} />
        <Route path='/food' element={<StoreBody />} />
        <Route path="/inventory" element={<Fridge />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
