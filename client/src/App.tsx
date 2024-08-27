import { LazyMotion, domAnimation } from 'framer-motion'
import Main from './components/display/main/Main'
import { Providers } from './components/display/Providers'
function App() {
	return (
		<>
			<Providers>
				<LazyMotion features={domAnimation}>
					<Main />
				</LazyMotion>
			</Providers>
		</>
	)
}

export default App
