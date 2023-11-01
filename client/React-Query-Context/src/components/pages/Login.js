import LoginForm from '../LoginFrom'
import Notification from '../Notification'

export const Login = () => {
  const styleHeaderRegist = {
    marginBottom: 'revert'
  }

  const containerAppStyle = {
    display: 'flex',
    flexFlow: 'column wrap',
    minHeight: '100vh',
  }

  const formContianer = {
    maxWidth: '800px',
    margin: '20px auto',
  }

  return (
    <div
      className='container'
      style={containerAppStyle}
    >
      <div style={formContianer}>
        <h2 style={styleHeaderRegist}>Log in to application</h2>
        <Notification />
        <LoginForm />
      </div>
    </div>
  )
}