import bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import { gameRouter } from './game/game.controller'

dotenv.config()

const app: Express = express()

async function main() {
	app.use(bodyParser.json())

	app.use(
		cors({
			origin: ['http://localhost:5173'],
		})
	)

	app.get('/', (req: Request, res: Response) => {
		res.send('init')
	})

	app.use('/api', gameRouter)

	app.all('*', (req: Request, res: Response) => {
		res.status(404).json({ error: `Route ${req.originalUrl} not found` })
	})

	const PORT = process.env.PORT || 4200

	try {
		app.listen(PORT, () => {
			console.log(`Server is running at http://localhost:${PORT}`)
		})
	} catch (error) {
		console.log(error)
	}
}

main()
