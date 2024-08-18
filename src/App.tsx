import { AppContainer, Title, CardsContainer, TopRow, ContactRow, WebLink, Email, CenterSection } from './App.styles'
import Card from './components/Card'
import { data } from './assets/data/data'
import { Data } from './types'

function App() {
  return (
    <AppContainer>
      <TopRow>
        <Title>
          ed timmer
        </Title>
      </TopRow>

      <CenterSection>
        <ContactRow>
          <WebLink href="https://www.linkedin.com/in/edtimmer/" target="_blank" rel="noopener noreferrer">
            linkedin
          </WebLink>

          <WebLink href="https://github.com/EdTimmer" target="_blank" rel="noopener noreferrer">
            github
          </WebLink>

          <Email>
            edtimmer@gmail.com
          </Email>
        </ContactRow>

        <CardsContainer>        
        {
          data.map((item: Data, index: number) => (
            <Card key={index} title={item.title} imageName={item.imageName} web={item.web} code={item.code} />
          ))
        }
        </CardsContainer>
      </CenterSection>      
    </AppContainer>
  )
}

export default App
