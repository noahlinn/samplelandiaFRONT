import axios from 'axios'
import { useState,useEffect,useContext } from 'react'
import SearchPage from './pages/SearchPage'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import UserSamplePage from './pages/UserSamplePage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'
import EachSamplePage from './pages/EachSamplePage'
import UploadPage from './pages/UploadPage'
import ProfilePage from './pages/ProfilePage'
import EditSamplePage from './pages/EditSamplePage'
import './App.css';
import { Route } from 'react-router-dom'
import { UserContext } from './context/usercontext'
function App() {
  const backEnd = process.env.REACT_APP_BACKEND

  const { userState } = useContext(UserContext)
  const [user, setUser] = userState

  const getUserInfo = async () => {
    const userId = localStorage.getItem('userId')
    try {
      let res = await axios.get(`${backEnd}/users/info`, {
        headers: {
          Authorization: userId
        }
      })
      console.log(res)
      if (res.data.user) {
        setUser(res.data.user)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {getUserInfo()}, [])

  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' render={() => <HomePage />} />
      <Route exact path='/search' render={() => <SearchPage />} />
      <Route exact path='/signup' render={() => <SignUpPage />} />
      <Route exact path='/login' render={() => <LoginPage />} />
      <Route exact path='/sample/:id' render={() => <EachSamplePage />} />
      <Route exact path='/upload' render={() => <UploadPage />} />
      <Route exact path='/usersample/:id' render={() => <UserSamplePage />} />
      <Route exact path='/profile' render={() => <ProfilePage />} />
      <Route exact path='/editusersample/:id' render={() => <EditSamplePage />} />

    </div>
  );
}

export default App;
