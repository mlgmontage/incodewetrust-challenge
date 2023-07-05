import { useSelector } from "react-redux"
import { favouriteJokesSelector } from "../entities/favouriteJokes/model"
import { Container, Heading, CardsGrid, Card } from "../shared/ui"
import JokeBanner from "../widgets/JokeBanner"
import DeleteJoke from "../features/DeleteJoke"
import ClearJokes from "../features/ClearJokes"

const Main = () => {
  const jokes = useSelector(favouriteJokesSelector)

  return (
    <Container>
      <div className="center">by @mlgmontage</div>
      <Heading className="center">InCodeWeTrust</Heading>
      <JokeBanner />
      <div>
        <Heading className="center">Favourite</Heading>
        {!jokes.length && <h1 className="center text-light">Empty</h1>}
        <CardsGrid>
          {jokes.map(({ id, joke }, index) => (<Card key={id}>{joke} <DeleteJoke index={index} /></Card>))}
        </CardsGrid>
        {jokes.length ? <ClearJokes /> : ''}
      </div>
    </Container>
  )
}

export default Main