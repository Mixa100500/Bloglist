import { useEffect } from 'react'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../../reducers/usersReducer'
import { Link } from 'react-router-dom'

const Table = styled.table`
  width: 100%;
  border: 1px solid BurlyWood;
  border-collapse: collapse;
  margin-bottom: 1em;
`

const TableHeader = styled.th`
  background: BurlyWood;
  color: black;
  padding: 0.5em 1em;
`

const TableRow = styled.tr`
  &.even {
    background: inherit;
  }

  &.odd {
    background: #ffe2b4;
  }
`

const TableCell = styled.td`
  padding: 0.5em 1em;
  text-align: center;
`

const TableCellLink = styled.td`
  padding: 0;
`

const LinkTbale = styled(Link)`
  padding: 0.5em 1em;
  text-align: center;
  display: block;
  color: black;

  &:hover {
    background-color: BurlyWood;
    color: white;
    text-decoration: none;
  }
`

const TitlePage = styled.h2`
  font-size: 2rem;
`

export const Users = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  return <>
    <TitlePage>
      Users
    </TitlePage>
    <Table>
      <thead>
        <tr>
          <TableHeader>
            username
          </TableHeader>
          <TableHeader>
            blogs created
          </TableHeader>
        </tr>
      </thead>
      <tbody>
        {users.map((data, index) => (
          <TableRow
            className={index % 2 === 0 ? 'even' : 'odd'}
            key={data.id}
          >
            <TableCellLink>
              <LinkTbale to={data.id}>{data.username}</LinkTbale>
            </TableCellLink>
            <TableCell>
              {data.blogs.length}
            </TableCell>
          </TableRow>))}
      </tbody>
    </Table>
  </>
}