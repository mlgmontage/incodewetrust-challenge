import { useDispatch } from "react-redux"
import { Button } from "../shared/ui"
import { deleteJoke } from "../entities/favouriteJokes/model"

type Props = {
  index: number
}

const DeleteJoke: React.FC<Props> = ({ index }) => {
  const dispatch = useDispatch()

  return (<Button onClick={() => dispatch(deleteJoke(index))}>x</Button>)
}

export default DeleteJoke 