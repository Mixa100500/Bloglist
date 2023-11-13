import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

describe('BlogForm', () => {
  test('Calls the onSubmit handler with the correct data.', async () => {
    const createHandler = jest.fn()
    render(<BlogForm manageFrom={[createHandler]} />)

    const input = {
      title: 'Goto considered useful',
      author: 'Edsger Dijkstra',
      url: 'acm.com/goto'
    }

    const user = userEvent.setup()

    const titleInput = screen.getByPlaceholderText('Entert title')
    await user.type(titleInput, input.title)

    const authorInput = screen.getByPlaceholderText('Entert author')
    await user.type(authorInput, input.author)

    const urlInput = screen.getByPlaceholderText('Entert url')
    await user.type(urlInput, input.url)

    const showButton = screen.getByText('Submit')
    await user.click(showButton)

    const calls = createHandler.mock.calls

    expect(calls).toHaveLength(1)
    expect(calls[0][0]).toEqual(input)
  })
})

