import { useEffect, useState } from 'react'
import Notification from './components/Notification'
import LoginForm from './components/LoginFrom'
import { useSelector } from 'react-redux'

import { useInitialization } from './hooks'
import { styled } from 'styled-components'
import { Home } from './components/pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Users } from './components/pages/Users'
import { User } from './components/pages/User'
import { Blog } from './components/pages/Blog'
import NaVBar from './components/NavBar'

const AppContainerRegistration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: papayawhip;
`

const AppContainerPage = styled.div`
  display: flex;
  background-color: papayawhip;
  flex-flow: column wrap;
  min-height: 100vh;
`

const Page = styled.div`
  background: papayawhip;
  max-width: 1200px;
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  margin: 0 auto;
  width: 100%;
    @media screen and (min-width: 40rem) {
      & {
        width: 80%;
        padding: 0 10%;
      }
    }
`


const App = () => {
  const user = useSelector(state => state.user)
  const [userFetched, setUserFetched] = useState(false)
  const stateInitialazer = useInitialization()

  useEffect(() => {
    stateInitialazer()
    setUserFetched(true)
  }, [])

  if(!userFetched) {
    return <h1>loading ...</h1>
  }

  if (!user) {
    return (
      <AppContainerRegistration>
        <LoginForm />
      </AppContainerRegistration >
    )
  }

  return (
    <AppContainerPage>
      <NaVBar />
      <Page>
        <Notification />
        <Routes>
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='/users' element={<Users />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate replace to="/" />} />
        </Routes>
      </Page>
    </AppContainerPage>
  )
}
export default App
