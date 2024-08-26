import { useState } from 'react'
import './Main.css'
const Main = () => {
	const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false)
	const [isUserWon, setIsUserWon] = useState<boolean>(false)

	const handleStart = () => {
		setIsGameStarted(true)
	}

	return (
		<section>
			{isGameStarted ? (
				<div className='bg-stone-700 p-8 rounded-md flex justify-center flex-col gap-7'>
					<div>
						<h2 className='text-2xl font-semibold'>
							{isUserWon ? 'Вітаю, ви перемогли!' : 'Вгадай число в між 1-100'}
						</h2>
						<div className='mt-5 flex justify-center'>
							{!isUserWon && (
								<label>
									<input
										className='bg-[#222] text-lg px-4 py-2 focus:outline-2 focus:outline-solid focus:outline-indigo-600 outline-none w-[200px] rounded-md transition-colors duration-300'
										name='number'
										placeholder='Введіть число'
										type='number'
										max={100}
										min={0}
									/>
								</label>
							)}

							{isUserWon ? (
								<button
									onClick={handleStart}
									className='px-4  py-2 ml-2 bg-indigo-600 shadow-md rounded-md text-lg font-semibold transition-all  hover:bg-opacity-80 duration-300 active:bg-opacity-70'
								>
									Грати ще раз
								</button>
							) : (
								<button
									onClick={handleStart}
									className='px-4 py-2 ml-2 bg-indigo-600 shadow-md rounded-md text-lg font-semibold transition-all  hover:bg-opacity-80 duration-300 active:bg-opacity-70'
								>
									Перевірити
								</button>
							)}
						</div>
						{isGameEnded && (
							<>
								<div className='text-center text-lg font-semibold text-orange-400'>
									Ви вгадали
								</div>
							</>
						)}
					</div>
				</div>
			) : (
				<div className='bg-stone-700 p-8 rounded-md flex justify-center flex-col gap-7'>
					<h2 className='text-4xl font-bold'>Гра вгадай число</h2>
					<button
						onClick={handleStart}
						className='px-3 py-2 bg-indigo-600 shadow-md rounded-md text-lg font-semibold transition-all hover:bg-opacity-80 duration-300 active:bg-opacity-70'
					>
						Розпочати
					</button>
				</div>
			)}
		</section>
	)
}

export default Main
