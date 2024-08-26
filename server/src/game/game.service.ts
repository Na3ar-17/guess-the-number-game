class GameService {
	generatedNumber: number = 0
	startGame() {
		this.generatedNumber = Math.floor(Math.random() * 100)
		return this.generatedNumber
	}
}

export const gameService = new GameService()
