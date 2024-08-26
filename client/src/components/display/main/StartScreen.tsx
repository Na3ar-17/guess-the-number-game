import Button from '../../ui/button/Button'

interface IProps {
	handleStart: () => void
}

const StartScreen = ({ handleStart }: IProps) => {
	return (
		<div className='bg-stone-700 p-8 rounded-md flex justify-center flex-col gap-7'>
			<h2 className='text-4xl font-bold'>Гра вгадай число</h2>
			<Button text='Розпочати' onClick={handleStart} />
		</div>
	)
}

export default StartScreen
