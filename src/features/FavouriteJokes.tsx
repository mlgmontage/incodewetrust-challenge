import { styled } from "styled-components"
import { Card, Heading } from "../shared/ui"
import { useSelector } from "react-redux"
import { favouriteJokesSelector } from "../entities/favouriteJokes/model"

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

const FavouriteJokes = () => {
  const jokes = useSelector(favouriteJokesSelector)

  return (<div>
    <Heading className="center">Favourite</Heading>
    {!jokes.length && <h1 className="center text-light">Empty</h1>}
    <CardsGrid>
      {jokes.map(({ id, joke }) => (<Card key={id}>{joke}</Card>))}
    </CardsGrid>
  </div>)
}

export default FavouriteJokes