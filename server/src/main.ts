import bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import TelegramBot from 'node-telegram-bot-api'
import { gameRouter } from './game/game.controller'

dotenv.config()

const app: Express = express()

const token = process.env.TELEGRAM_BOT_TOKEN
const bot = new TelegramBot(token || '', { polling: true })

bot.onText(/\/start/, msg => {
	const chatId = msg.chat.id

	const startKeyboard = {
		reply_markup: {
			inline_keyboard: [
				[
					{
						text: 'Почати гру',
						url: 'https://www.npmjs.com/package/node-telegram-bot-api',
					},
				],
			],
		},
	}

	bot.sendMessage(
		chatId,
		'Вітаю у грі! Натисніть кнопку щоб почати.',
		startKeyboard
	)
})

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
