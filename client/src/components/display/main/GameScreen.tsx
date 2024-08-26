import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IGameDto, IGameResponse } from '../../../types'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'

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
								max={100}
								min={0}
								{...register('number', {
									required: {
										value: true,
										message: "Це поле є обов'язковим",
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
					{isUserWon && <Button text='Грати ще раз' onClick={handleStart} />}
				</div>
				{data?.message !== 'Число вгадано' && (
					<div className='text-center text-lg font-semibold mt-5 text-orange-400'>
						{isPending ? 'Завантаження' : data?.message}
					</div>
				)}
			</div>
		</div>
	)
}

export default GameScreen
