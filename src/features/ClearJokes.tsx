import { useDispatch } from "react-redux"
import { Button, ButtonGroup } from "../shared/ui"
import { clearJokes } from "../entities/favouriteJokes/model"

const ClearJokes = () => {
  const dispatch = useDispatch()

  return (<ButtonGroup>
    <Button onClick={() => dispatch(clearJokes())}>clear</Button>
  </ButtonGroup>)
}

export default ClearJokes