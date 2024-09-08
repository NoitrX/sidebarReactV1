import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './layouts/Layout'
import Dashboard from "./views/Dashboard/Dashboard"
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={Dashboard}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
