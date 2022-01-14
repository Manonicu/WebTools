import Link from 'next/link';

export default function Home() {
	return (
		<div className='grid grid-cols-3 gap-4 px-8 py-12 w-screen h-screen bg-indigo-50 home'>
			<div className='grid place-items-center cursor-pointer font-medium text-xl rounded-xl shadow-xl shadow-indigo-200 bg-white p-4'>
				<Link href='/image'>
					<a>Image Tools</a>
				</Link>
			</div>
			<div className='grid place-items-center cursor-pointer font-medium text-xl rounded-xl shadow-xl shadow-indigo-200 bg-white p-4'>
				<Link href='/'>
					<a>CSS Tools</a>
				</Link>
			</div>
			<div className='grid place-items-center cursor-pointer font-medium text-xl rounded-xl shadow-xl shadow-indigo-200 bg-white p-4'>
				<Link href='/'>
					<a>Text Tools</a>
				</Link>
			</div>
			<div className='grid place-items-center cursor-pointer font-medium text-xl rounded-xl shadow-xl shadow-indigo-200 bg-white p-4'>
				<Link href='/'>
					<a>Coding Tools</a>
				</Link>
			</div>
			<div className='grid place-items-center cursor-pointer font-medium text-xl rounded-xl shadow-xl shadow-indigo-200 bg-white p-4'>
				<Link href='/'>
					<a>Color Tools</a>
				</Link>
			</div>
			<div className='grid place-items-center cursor-pointer font-medium text-xl rounded-xl shadow-xl shadow-indigo-200 bg-white p-4'>
				<Link href='/'>
					<a>Social Media Tools</a>
				</Link>
			</div>
			<div className='grid place-items-center cursor-pointer font-medium text-xl rounded-xl shadow-xl shadow-indigo-200 bg-white p-4 col-span-3'>
				<Link href='/miscellaneous'>
					<a>Miscellaneous Tools</a>
				</Link>
			</div>
		</div>
	);
}
