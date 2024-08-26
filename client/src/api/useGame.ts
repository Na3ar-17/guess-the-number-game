import { useMutation } from '@tanstack/react-query'
import { IGameDto } from '../types'
import { gameService } from './game.service'

export const useGame = () => {
	const useStartGame = () => {
		const mutation = useMutation({
			mutationKey: ['start-game'],
			mutationFn: () => gameService.startGame(),
		})
		return { mutation }
	}
	const useGuess = () => {
		const mutation = useMutation({
			mutationKey: ['guess'],
			mutationFn: ({ number }: IGameDto) => gameService.guess({ number }),
		})
		return { mutation }
	}
	return { useStartGame, useGuess }
}
