import { Link } from 'react-router-dom'
import { useClearUser, useUser } from '../contexts/UserContext'
import { useNotifyWith } from '../contexts/NotificationContext'

export const NavBar = () => {
  const user = useUser()
  const clearUser = useClearUser()
  const notifyWith = useNotifyWith()

  const logout = e => {
    e.preventDefault()
    clearUser()
    notifyWith('logged out')
  }
  const navBar = {
    padding: 5,
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    borderBottom: 'solid var(--secondary-color) 1px'
  }

  const navLinks = {
    display: 'flex',
    alignItems: 'center',
  }

  const styleLinkNav = {
    padding: '0.5em 1em',
    textDecoration: 'none',
    borderRadius: '0.3em'
  }
  const styleMargin = {
    margin: 'revert'
  }

  const topNavigationMain = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '1 1',
  }

  return (
    <header style={navBar}>
      <div  className='title' style={styleMargin}>Blog app</div>
      <div
        className='topNavigationMain'
        style={topNavigationMain}
      >
        <div style={navLinks}>
          <Link style={styleLinkNav} to={'/'}>
            Home
          </Link>
          <Link style={styleLinkNav} to={'/users'}>
            Users
          </Link>
        </div>
        <div>
          <span className='username'>
            {user.name}
          </span>
          {' logged in '}
          <button onClick={logout}>
            logout
          </button>
        </div>
      </div>
    </header>
  )
}