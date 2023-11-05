import commetService from '../services/comments'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { useField } from '../hooks'
import { Button } from './Button'

const CommentFormContainer = styled.div`
  background: papayawhip;
  margin-top: 0.5em;
`

const FormTitle = styled.h3`
  font-size: 1.2rem;
`

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const CommentTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid BurlyWood;
  border-radius: 3px;
  font-size: 1rem;

  &:focus {
    border-color: DarkOrange;
    outline: none;
  }
`

export const CommentBlogForm = ({ setComments }) => {
  const id = useParams().id
  const [field, setValue] = useField('text', 'content')

  const onSubmit = async event => {
    event.preventDefault()
    const comment = await commetService.create(id, field.value)
    setValue('')
    setComments(prevState => prevState.concat(comment))
  }

  return (
    <CommentFormContainer>
      <FormTitle>Add a Comment</FormTitle>
      <CommentForm onSubmit={onSubmit}>
        <CommentTextarea {...field} />
        <Button type='sumbit'>submit</Button>
      </CommentForm>
    </CommentFormContainer>
  )
}