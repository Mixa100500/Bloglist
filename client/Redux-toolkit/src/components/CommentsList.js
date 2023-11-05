import { styled } from 'styled-components'

const CommentListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Comment = styled.li`
  color: black;
  padding: 1em;
  border-bottom: 1px solid Chocolate;

  &:hover {
    color: white;
    background-color: BurlyWood;
  }
`

const Diver = styled.div`
  border-bottom: 4px solid BurlyWood;
`

const EmptyСomments = () => {
  return (
    <span>
      There are no comments yet.
    </span>
  )
}

export const CommentList = ({ comments }) => {

  return (
    <>
      <h3>Comments</h3>
      <Diver />
      {comments.length <= 0 ? <EmptyСomments /> :
        <CommentListContainer>
          {comments.map(comment => <Comment key={comment.id}>
            {comment.content}
          </Comment>)
          }
        </CommentListContainer>
      }
    </>
  )
}