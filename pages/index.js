export default function Home() {
	return (
		<div className='grid grid-cols-3 gap-4 p-8 w-screen h-screen bg-gray-100 home'>
			<div className='grid place-items-center font-medium text-xl rounded-xl drop-shadow-xl bg-white p-4'>
				Image Tools
			</div>
			<div className='grid place-items-center font-medium text-xl rounded-xl drop-shadow-xl bg-white p-4'>
				CSS Tools
			</div>
			<div className='grid place-items-center font-medium text-xl rounded-xl drop-shadow-xl bg-white p-4'>
				Text Tools
			</div>
			<div className='grid place-items-center font-medium text-xl rounded-xl drop-shadow-xl bg-white p-4'>
				Coding Tools
			</div>
			<div className='grid place-items-center font-medium text-xl rounded-xl drop-shadow-xl bg-white p-4'>
				Color Tools
			</div>
			<div className='grid place-items-center font-medium text-xl rounded-xl drop-shadow-xl bg-white p-4'>
				Social Media Tools
			</div>
			<div className='grid place-items-center font-medium text-xl rounded-xl drop-shadow-xl bg-white p-4 col-span-3'>
				Miscellaneous Tools
			</div>
		</div>
	);
}
