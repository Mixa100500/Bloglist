import { useRef } from 'react'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import { useCreateBlog } from '../hooks/BlogButton'

export const TogglableBlogForm = () => {
  const blogFormRef = useRef()
  const manageFrom = useCreateBlog(blogFormRef)

  return (
    <Togglable buttonLabel='create new' ref={blogFormRef}>
      <BlogForm
        manageFrom={manageFrom}
      />
      <hr />
    </Togglable>
  )
}