import { useState } from "react";
import { Banner, Button, ButtonGroup } from "../shared/ui"
import { chuckApi } from "../shared/api";
import { useDispatch } from "react-redux";
import { createJoke } from "../entities/favouriteJokes/model";

const JOKE_DELAY = 3000
let intervalId: number | undefined

const JokeBanner = () => {
  const dispatch = useDispatch()
  const [joke, setJoke] = useState({ text: '', id: '' })
  const [playing, setPlaying] = useState(false)

  const fetchJoke = () => chuckApi.getJoke().then(({ data }) => setJoke({ text: data.value, id: data.id }))
  const create = () => dispatch(createJoke({ id: joke.id, joke: joke.text }))


  const togglePlay = () => {
    setPlaying(!playing)

    if (playing) {
      clearInterval(intervalId)
      intervalId = undefined
    } else {
      intervalId = setInterval(fetchJoke, JOKE_DELAY)
    }
  }

  return (<div>
    <Banner>
      {joke.text.length ? joke.text : (<div className="text-light">Click "GET" to fetch joke</div>)}
    </Banner>

    <ButtonGroup>
      <Button onClick={fetchJoke}>GET</Button>
      <Button onClick={togglePlay}> {playing ? 'STOP' : 'PLAY'}</Button>
      <Button onClick={create} >LIKE</Button>
    </ButtonGroup>
  </div>)
}

export default JokeBanner
