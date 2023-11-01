import { useState } from 'react'
import { Form } from 'react-bootstrap'

const fromControlsStyle = {
  display: 'flex',
  flexFlow: 'row wrap'
}

const formControlItemStyle = {
  flex: '1 1',
}

const BlogForm = ({ manageFrom }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const [createBlog, toggleVisiblity] = manageFrom

  const cancel = (event) => {
    event.preventDefault()
    toggleVisiblity()
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title,
      author,
      url,
    })
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <Form onSubmit={addBlog}>
      <Form.Group className='mb-3' controlId='fromBasicEnterTitle'>
        <Form.Label>
          Title:
        </Form.Label>
        <Form.Control
          className='dark'
          type='text'
          placeholder='Entert title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='fromBasicEnterAuthor'>
        <Form.Label>
          Author:
        </Form.Label>
        <Form.Control
          className='dark'
          type='text'
          placeholder='Entert author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='fromBasicEnterUrl'>
        <Form.Label>
          URL:
        </Form.Label>
        <Form.Control
          className='dark'
          type='text'
          placeholder='Entert url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Form.Group>
      <div style={fromControlsStyle}>
        <button
          onClick={cancel}
          style={formControlItemStyle}
        >
          cancel
        </button>
        <button
          type='submit'
          style={formControlItemStyle}
        >
          Submit
        </button>
      </div>
    </Form>
  )
}

export default BlogForm