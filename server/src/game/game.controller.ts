import { Request, Response, Router } from 'express'
import { body, validationResult } from 'express-validator'
import { gameService } from './game.service'
const router = Router()

router.post('/start-game', (req: Request, res: Response) => {
	const number = gameService.startGame()
	res.status(200).json({
		number,
	})
})
router.post(
	'/guess',
	body('number').isFloat({ min: 1, max: 100 }),
	(req: Request, res: Response) => {
		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		const dto: { number: number } = req.body
		const { message } = gameService.guess(dto.number)

		res.status(200).json({
			message,
		})
	}
)

export { router as gameRouter }
