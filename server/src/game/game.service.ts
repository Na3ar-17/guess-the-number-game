class GameService {
	generatedNumber: number = 0
	startGame(): number {
		this.generatedNumber = Math.floor(Math.random() * 100)
		return this.generatedNumber
	}

	guess(number: number): { message: string } {
		if (number === this.generatedNumber) {
			return {
				message: 'Число вгадано',
			}
		}

		if (number > this.generatedNumber) {
			return {
				message: 'Загадане число менше',
			}
		}

		return {
			message: 'Загадане число більше',
		}
	}
}

export const gameService = new GameService()
