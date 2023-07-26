import { useState } from 'react'
import './App.css'
// import SignIn from './components/SignIn'
// import SignUp from './components/SignUp'
import Profile from './components/Profile'
// import Header from './components/Header'
import Main from './components/Main'
// import Footer from './components/Footer'
import Context from './Context'

function App() {
  
  const [userInfo, setUserInfo] = useState({
    name: '',
    photo_url: '',
    location: '',
    contact: ''
  })

  return (
    <div>
      <Context.Provider value={{ userInfo, setUserInfo}}>
       <Main />
      </Context.Provider>
    </div>
  )
}

export default App
