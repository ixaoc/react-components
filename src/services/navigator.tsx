import { FC } from 'react'
import { useNavigate } from 'react-router'
import { NavigateFunction } from 'react-router'

export let navigate: NavigateFunction

export const Navigator: FC = () => {
	navigate = useNavigate()
  return null
}
