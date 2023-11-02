import { useQuery } from 'react-query'
import usersService from '../../services/users'
import { Link, useParams } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const User = () => {
  const { id } = useParams()

  const usersQuery = useQuery('users', usersService.getAll, {
    refetchOnWindowFocus: false
  })

  if (usersQuery.isLoading) {
    return <div>Loading data...</div>
  }

  if (usersQuery.isError) {
    return <div>Error loading data. Please try again later.</div>
  }

  const users = usersQuery.data
  const user = users.find(a => a.id === id)
  return (
    <div>
      <h2>
        <span className='username'>{user.name}</span>
      </h2>
      {user.blogs.length > 0 ? (
        <>
          <h3>added blogs:</h3>
          <ListGroup className='list-links'>
            {user.blogs.map(b => (
              <ListGroup.Item key={b.id}>
                <Link
                  className='link'
                  to={`/blogs/${b.id}`}
                >
                  {b.title}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      ) :
        <p>This user has not added any blogs yet.</p>
      }
    </div>
  )
}

export default User