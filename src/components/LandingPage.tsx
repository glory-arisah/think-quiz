import { Link } from 'react-router-dom'

const LandingPage = () => {
	return (
		<div>
			<nav className="w-screen fixed top-0 py-6 px-4 shadow-md">
				<div className="flex items-center justify-between">
					<Link
						to={'/'}
						className="logo flex items-end gap-x-1.5"
					>
						<div className="text-3xl font-black bg-linear-to-r from-purple-500 via-pink-primary to-red-500 bg-clip-text text-transparent">
							T.
						</div>
						<div className="font-medium mb-0.5">𝚃𝚑𝚒𝚗𝚔𝚀𝚄𝙸𝚉</div>
					</Link>

					<div className="other-links">
						<Link
							to={'/#features'}
							className="text-sm text-[#888]"
						>
							Features
						</Link>
					</div>
				</div>
			</nav>

			<main className="pt-24">
				<section
					id="features"
					className="h-screen"
				></section>
			</main>
		</div>
	)
}

export default LandingPage
