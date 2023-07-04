import { Container, Heading } from "../shared/ui"
import JokeBanner from "../features/JokeBanner"

const App = () => {

  return (
    <Container>
      <Heading className="center">InCodeWeTrust</Heading>
      <JokeBanner />
      <Heading className="center">Favourite</Heading>
    </Container>
  )
}

export default App
