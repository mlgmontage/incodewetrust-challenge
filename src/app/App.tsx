import { Container, Heading } from "../shared/ui"
import JokeBanner from "../features/JokeBanner"
import { withProviders } from "./providers/with-providers"
import FavouriteJokes from "../features/FavouriteJokes"

const App = () => {

  return (
    <Container>
      <Heading className="center">InCodeWeTrust</Heading>
      <JokeBanner />
      <FavouriteJokes />
    </Container>
  )
}

export default withProviders(App)
