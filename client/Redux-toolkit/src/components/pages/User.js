import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import usersService from '../../services/users'
import styled from 'styled-components'

const UserName = styled.h2`
  font-size: 2rem;
`

const Diver = styled.div`
  border-bottom: 4px solid BurlyWood;
`

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

export const User = () => {
  const users = useSelector(state => state.users)
  const id = useParams().id
  const savedUser = users.find(user => user.id === id)
  const [user, setUser] = useState(savedUser)

  useEffect(() => {
    if(!savedUser) {
      usersService.getOne(id)
        .then(user => setUser(user))
    }
  }, [])

  if(!user) {
    return null
  }

  return (
    <>
      <UserName>{user.username}</UserName>
      <h3>added blogs</h3>
      <Diver />
      {user.blogs.length === 0 ?
        <span>The user has not added a blog.</span> :
        <ListBlogs>
          {user.blogs.map(blog => <ListItem key={blog.id}>
            <ListLink to={`/blog/${blog.id}`}>{blog.title}</ListLink>
          </ListItem>
          )}
        </ListBlogs>
      }
    </>
  )
}