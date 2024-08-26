import { IGameDto, IGameResponse } from '../types'
import { axios } from './axios'

class GameService {
	async startGame() {
		try {
			return await axios.post('/start-game')
		} catch (error) {
			console.log(error)
			throw error
		}
	}

	async guess(dto: IGameDto): Promise<IGameResponse> {
		try {
			const { data } = await axios.post('/guess', dto)
			return data
		} catch (error) {
			console.log(error)
			throw error
		}
	}
}
export const gameService = new GameService()
