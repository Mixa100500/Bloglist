import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useLogout } from '../hooks'

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: BurlyWood;
  padding: 1em;
  position: sticky;
  top: 0;
`

const NavButton = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5em .3em;
  color: white;
  border-radius: 0.3em;

  &:hover {
    color: BurlyWood;
    background-color: papayawhip;
  }
`

const Title = styled.span`
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5em .3em;
  color: black;
`

const RightNav = styled.div`
  display: flex;
  align-items: center;
`

const UserInfo = styled.div`
  margin-right: 1em;
  text-align: right;
`

const LogoutButton = styled.button`
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5em .3em;
  color: white;
  border-radius: 0.3em;
  background-color: BurlyWood;
  border: 0;

  &:hover {
    color: BurlyWood;
    background-color: white;
    cursor: pointer;
  }
`

const NaVBar = () => {
  const user = useSelector(state => state.user)
  const logout = useLogout()
  return (
    <Navigation>
      <div>
        <Title>Blog app</Title>
        <NavButton to='/'>Home</NavButton>
        <NavButton to='/users'>Users</NavButton>
      </div>
      <RightNav>
        <UserInfo>{user.name} logged in</UserInfo >
        <LogoutButton onClick={logout}>logout</LogoutButton>
      </RightNav>
    </Navigation>
  )
}

export default NaVBar