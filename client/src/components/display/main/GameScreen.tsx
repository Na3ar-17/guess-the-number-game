import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IGameDto, IGameResponse } from '../../../types'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'
import Loader from '../../ui/loader/Loader'

interface IProps {
	isUserWon: boolean
	onSubmit: () => void
	handleStart: () => void
	register: UseFormRegister<IGameDto>
	errors: FieldErrors<IGameDto>
	data: IGameResponse | undefined
	isButtonDisabled: boolean
	isPending: boolean
}

const GameScreen = ({
	isUserWon,
	onSubmit,
	handleStart,
	register,
	errors,
	data,
	isButtonDisabled,
	isPending,
}: IProps) => {
	return (
		<div className='bg-stone-700 p-8 rounded-md flex justify-center flex-col gap-7'>
			<div>
				<h2 className='text-2xl font-semibold text-center'>
					{isUserWon ? 'Вітаю, ви перемогли!' : 'Вгадай число між 1-100'}
				</h2>
				<div className='mt-5 flex justify-center'>
					{!isUserWon && (
						<form className=' flex justify-center' onSubmit={onSubmit}>
							<Input
								errors={errors}
								placeholder='Введіть число'
								type='number'
								disabled={isButtonDisabled}
								{...register('number', {
									required: {
										value: true,
										message: "Це поле є обов'язковим",
									},
									min: {
										value: 1,
										message: 'Мінімальне число 1',
									},
									max: {
										value: 100,
										message: 'Максимальне число 100',
									},
									valueAsNumber: true,
								})}
							/>
							<Button
								text='Перевірити'
								type='submit'
								disabled={isButtonDisabled}
							/>
						</form>
					)}
					{isUserWon && (
						<Button
							text='Грати ще раз'
							onClick={() => {
								handleStart()
							}}
						/>
					)}
				</div>
				{isPending ? (
					<div className='mt-5 flex justify-center items-center'>
						<Loader />
					</div>
				) : (
					data?.message && (
						<div
							className={`text-center text-lg font-semibold mt-5 ${
								data.message === 'Число вгадано'
									? 'text-green-500'
									: 'text-orange-400'
							} `}
						>
							{data.message}
						</div>
					)
				)}
			</div>
		</div>
	)
}

export default GameScreen
