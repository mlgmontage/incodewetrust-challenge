import { useState } from "react";
import { Banner, Button, ButtonGroup } from "../shared/ui"
import { chuckApi } from "../shared/api";


const JokeBanner = () => {
  const [joke, setJoke] = useState('')

  const fetchJoke = () => chuckApi.getJoke().then(({ data }) => setJoke(data.value))

  return (<div>
    <Banner>
      {joke.length ? joke : (<div className="text-light">Click to fetch joke</div>)}
    </Banner>

    <ButtonGroup>
      <Button onClick={fetchJoke}>GET</Button>
      <Button>PLAY</Button>
      <Button>LIKE</Button>
    </ButtonGroup>
  </div>)
}

export default JokeBanner
