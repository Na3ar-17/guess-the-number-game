import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldErrors } from 'react-hook-form'
import { IGameDto } from '../../../types'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	errors: FieldErrors<IGameDto>
}

const Input = forwardRef<HTMLInputElement, IProps>(
	({ errors, ...rest }: IProps, ref) => {
		return (
			<label className='relative'>
				<input
					ref={ref}
					className='bg-[#222] text-lg px-4 py-2 focus:outline-2 focus:outline-solid focus:outline-indigo-600 outline-none w-[200px] rounded-md transition-colors duration-300'
					{...rest}
				/>
				{errors.number && (
					<p className='absolute text-sm text-red-400'>
						{errors.number.message}
					</p>
				)}
			</label>
		)
	}
)
export default Input
