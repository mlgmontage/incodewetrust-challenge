import { useSelector } from "react-redux"
import { favouriteJokesSelector } from "../entities/favouriteJokes/model"
import { Container, Heading, CardsGrid, Card } from "../shared/ui"
import JokeBanner from "../widgets/JokeBanner"

const Main = () => {
  const jokes = useSelector(favouriteJokesSelector)

  return (
    <Container>
      <Heading className="center">InCodeWeTrust</Heading>
      <JokeBanner />
      <div>
        <Heading className="center">Favourite</Heading>
        {!jokes.length && <h1 className="center text-light">Empty</h1>}
        <CardsGrid>
          {jokes.map(({ id, joke }) => (<Card key={id}>{joke}</Card>))}
        </CardsGrid>
      </div>
    </Container>
  )
}

export default Main