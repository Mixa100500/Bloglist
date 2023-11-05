import styled from 'styled-components'
import { BlogList } from '../BlogList'
import { TogglableBlogForm } from '../ToglableBlogForm'

const TitlePage = styled.h2`
  font-size: 2rem;
`

const Diver = styled.div`
  border-bottom: 4px solid BurlyWood;
`

export const Home = () => {
  return (
    <>
      <TitlePage>Blogs</TitlePage>
      <TogglableBlogForm />
      <Diver />
      <BlogList />
    </>
  )
}