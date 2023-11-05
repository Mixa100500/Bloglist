import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const ListItem = styled.li`
  border-bottom: 1px solid Chocolate;
`

const ListBlogs = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const ListLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem 0.5rem;
  display: block;

  &:hover {
    background-color: BurlyWood;
    color: white;
  }
`

const TitleLink = styled.span`
  font-size: 1.2rem;
`

export const BlogList = () => {
  const blogs = useSelector(state => state.blogs)

  return <ListBlogs>
    {blogs.map(blog =>
      <ListItem key={blog.id}>
        <ListLink
          to={`blog/${blog.id}`}
        >
          <TitleLink>
            {`${blog.title} `}
          </TitleLink>
          <div>{blog.author}</div>
        </ListLink>
      </ListItem>
    )}
  </ListBlogs>
}