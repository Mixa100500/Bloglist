import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const BlogList = ({ blogs }) => {
  if(blogs.length <= 0) {
    return null
  }

  return (
    <ListGroup className='list-links'>
      {blogs.map(blog =>
        <ListGroup.Item
          key={blog.id}
        >
          <Link
            className='link'
            to={`/blogs/${blog.id}`}
          >
            {blog.title}
          </Link>
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}