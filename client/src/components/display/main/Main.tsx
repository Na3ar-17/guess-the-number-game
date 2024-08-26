import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useGame } from '../../../api/useGame'
import { IGameDto } from '../../../types'
import GameScreen from './GameScreen'
import './Main.css'
import StartScreen from './StartScreen'

const Main = () => {
	const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
	const [isUserWon, setIsUserWon] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<IGameDto>({
		mode: 'onChange',
	})
	const { useGuess, useStartGame } = useGame()
	const {
		mutation: { mutate: startGameMutation },
	} = useStartGame()

	const {
		mutation: { mutate, data, isPending },
	} = useGuess()

	const handleStart = () => {
		startGameMutation()
		setIsGameStarted(true)
		setIsUserWon(false)
	}

	const onSubmit = (data: IGameDto) => {
		mutate(data)
	}

	useEffect(() => {
		if (data) {
			reset()
		}
		if (data?.message === 'Число вгадано') {
			setIsUserWon(true)
		}
	}, [data])

	return (
		<section>
			{isGameStarted ? (
				<GameScreen
					errors={errors}
					handleStart={handleStart}
					isUserWon={isUserWon}
					onSubmit={handleSubmit(onSubmit)}
					register={register}
					data={data}
					isButtonDisabled={isPending || isSubmitting}
					isPending={isPending}
				/>
			) : (
				<StartScreen handleStart={handleStart} />
			)}
		</section>
	)
}

export default Main
