import Link from 'next/link';

export default function Home() {
	return (
		<div className='home'>
			<div className='home-item'>
				<Link href='/image'>
					<a>Image Tools</a>
				</Link>
			</div>
			<div className='home-item'>
				<Link href='/css'>
					<a>CSS Tools</a>
				</Link>
			</div>
			<div className='home-item'>
				<Link href='/text'>
					<a>Text Tools</a>
				</Link>
			</div>
			<div className='home-item'>
				<Link href='/coding'>
					<a>Coding Tools</a>
				</Link>
			</div>
			<div className='home-item'>
				<Link href='/color'>
					<a>Color Tools</a>
				</Link>
			</div>
			<div className='home-item'>
				<Link href='/ms'>
					<a>Social Media Tools</a>
				</Link>
			</div>
			<div className='home-item col-span-3'>
				<Link href='/miscellaneous'>
					<a>Miscellaneous Tools</a>
				</Link>
			</div>
		</div>
	);
}
