import axios from "axios";

const BASE_URL = 'https://api.chucknorris.io/'

const instance = axios.create({
  baseURL: BASE_URL
})

type JokeT = {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export const getJoke = () => instance.get<JokeT>('jokes/random');