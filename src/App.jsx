import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Nav from "./components/Nav"

//pages
import LoginPage from "./components/LoginPage"
import LoginError from "./components/LoginError"
import UserPage from "./components/UserPage"
import ImageCapturePage from "./components/ImageCapturePage"

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/loginerror" element={<LoginError />} />
        <Route path="/imagecapture/:feature" element={<ImageCapturePage />} />
      </Routes>
    </div>
  )
}

export default App
