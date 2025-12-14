import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='mt-20 border-t border-black/10 dark:border-white/10 bg-white dark:bg-background-dark/30 rounded-xl pt-12 pb-8 px-4 mb-8 shadow-sm'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12'>
				{/* Brand */}
				<div className='lg:col-span-4 flex flex-col gap-5'>
					<div className='flex items-center gap-3 text-[#181111] dark:text-white'>
						<h2 className='text-xl font-bold tracking-tight'>
							<span className='text-primary'>NVH.</span>Countdown
						</h2>
					</div>

					<p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs'>
						The ultimate platform to track Vietnam&apos;s most
						important holidays and your personal milestones.
						Precision, beauty, and simplicity combined.
					</p>
				</div>

				{/* Navigation */}
				<div className='lg:col-span-2 lg:col-start-6'>
					<h3 className='font-bold text-[#181111] dark:text-white mb-4'>
						Navigation
					</h3>
					<ul className='flex flex-col gap-3 text-sm'>
						{['Home', 'My Events', 'All Holidays', 'About'].map(
							(item) => (
								<li key={item}>
									<a
										href='#'
										className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'
									>
										{item}
									</a>
								</li>
							)
						)}
					</ul>
				</div>

				{/* Support */}
				<div className='lg:col-span-2'>
					<h3 className='font-bold text-[#181111] dark:text-white mb-4'>
						Support
					</h3>
					<ul className='flex flex-col gap-3 text-sm'>
						{['Help Center', 'FAQ', 'Contact', 'Feedback'].map(
							(item) => (
								<li key={item}>
									<a
										href='#'
										className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'
									>
										{item}
									</a>
								</li>
							)
						)}
					</ul>
				</div>

				{/* Legal */}
				<div className='lg:col-span-2'>
					<h3 className='font-bold text-[#181111] dark:text-white mb-4'>
						Legal
					</h3>
					<ul className='flex flex-col gap-3 text-sm'>
						{[
							'Privacy Policy',
							'Terms of Service',
							'Cookie Policy',
						].map((item) => (
							<li key={item}>
								<a
									href='#'
									className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Bottom */}
			<div className='border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6'>
				<p className='text-sm text-gray-500 dark:text-gray-400'>
					© 2026 <span className='text-primary'>NVH.</span>Countdown.
					All rights reserved.
				</p>

				<div className='flex items-center gap-6'>
					{/* Facebook */}
					<Link
						to='#'
						className='text-gray-400 hover:text-primary transition-colors'
					>
						<svg
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							className='w-5 h-5 fill-current'
						>
							<title>GitHub</title>
							<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
						</svg>
					</Link>
					<Link
						to='#'
						className='text-gray-400 hover:text-primary transition-colors'
					>
						<svg
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							className='w-5 h-5 fill-current'
						>
							<title>Facebook</title>
							<path d='M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z' />
						</svg>
					</Link>
					<Link
						to='#'
						className='text-gray-400 hover:text-primary transition-colors'
					>
						<svg
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							className='w-5 h-5 fill-current'
						>
							<title>Gmail</title>
							<path d='M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z' />
						</svg>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
