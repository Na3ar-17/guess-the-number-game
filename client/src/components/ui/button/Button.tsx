import { ButtonHTMLAttributes, forwardRef } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

const Button = forwardRef<HTMLButtonElement, IProps>(
	({ text, ...rest }: IProps, ref) => {
		return (
			<button
				ref={ref}
				className='px-4 disabled:bg-indigo-700 disabled:cursor-not-allowed py-2 ml-2 bg-indigo-600 shadow-md rounded-md text-lg font-semibold transition-all  hover:bg-opacity-80 duration-300 active:bg-opacity-70'
				{...rest}
			>
				{text}
			</button>
		)
	}
)

export default Button
