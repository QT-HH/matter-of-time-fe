import styled from 'styled-components'
import {ReactNode} from 'react'

const MainLayout = styled.div`
  margin: 20px 30px;
  padding: 20px 30px;
`

interface MainProps {
  children?: ReactNode
}

const Main = ({children}: MainProps) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}

export default Main
