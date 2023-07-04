import { useEffect } from "react"
import { Button, Card, Container, Heading } from "../shared/ui"
import { chuckApi } from "../shared/api"

const App = () => {

  useEffect(() => {
    chuckApi.getJoke().then(({ data }) => {
      console.log(data.value);
    })
  }, [])

  return (
    <Container>
      <Heading>InCodeWeTrust</Heading>
      <Button>Play</Button>
      <Card> inser joke here</Card>
    </Container>
  )
}

export default App
