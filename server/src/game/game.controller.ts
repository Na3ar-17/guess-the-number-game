import { Request, Response, Router } from 'express'
import { gameService } from './game.service'

const router = Router()

router.post('/start-game', (req: Request, res: Response) => {
	const number = gameService.startGame()
	res.json({
		number,
	})
})

export { router as gameRouter }
