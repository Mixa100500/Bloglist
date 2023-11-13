import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import blogsService from '../../services/blogs'
import { useLikeBlog, useRemoveBlog } from '../../hooks/BlogButton'
import { useUser } from '../../contexts/UserContext'
import Comments from '../Comments'
import { ListGroup } from 'react-bootstrap'

const Blog = () => {
  const id = useParams().id
  const blogsQuery = useQuery(['blogs', id], () => blogsService.getOne(id), {
    refetchOnWindowFocus: false
  })

  const like = useLikeBlog()
  const remove = useRemoveBlog()
  const user = useUser()

  if (blogsQuery.isLoading) {
    return <div>Loading data...</div>
  }

  if (blogsQuery.isError) {
    return <div>Error loading data. Please try again later.</div>
  }

  const blog = blogsQuery.data

  if(!blog) {
    return null
  }

  const canChange = user.username === blog.user.username

  return (
    <>
      <h2>
        {blog.title}
      </h2>
      <ListGroup>
        <ListGroup.Item className='list-group-link'>
          <a href={blog.url}>
            {blog.url}
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          {blog.likes} likes {canChange &&
          <button
            onClick={() => like(blog)}
          >
            like
          </button>}
        </ListGroup.Item>
        <ListGroup.Item>
          added by{' '}
          <span className='username'>{blog.author}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          {canChange &&
          <button
            onClick={() => remove(blog)}
          >
            delete
          </button>}
        </ListGroup.Item>
      </ListGroup>
      <Comments />
    </>
  )

}
export default Blog