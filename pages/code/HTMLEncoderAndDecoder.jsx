import { useState } from 'react';
const he = require('he');

export default function HTMLEncoderAndDecoder() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');
	const handleEncode = () => {
		inputVal && setOutputVal(he.encode(inputVal));
	};
	const handleDecode = () => {
		inputVal && setOutputVal(he.decode(inputVal));
	};

	return (
		<div className='w-full h-full grid grid-flow-row grid-cols-5 bg-white p-4 rounded'>
			<div className='col-span-2 h-1/2 border rounded overflow-hidden'>
				<textarea
					className='block h-full w-full p-4 resize-none'
					value={inputVal}
					placeholder='Input'
					onChange={(e) => {
						setInputVal(e.target.value);
					}}
				/>
			</div>
			<div className='flex flex-col justify-center gap-4 col-span-1 h-1/2 px-4'>
				<button
					className='w-full h-12 bg-blue-500 rounded text-white'
					onClick={handleEncode}
				>
					Encode
				</button>
				<button
					className='w-full h-12 bg-blue-500 rounded text-white'
					onClick={handleDecode}
				>
					Decode
				</button>
			</div>
			<div className='col-span-2 h-1/2 border rounded overflow-hidden'>
				<textarea
					className='block h-full w-full p-4 resize-none'
					value={outputVal}
					placeholder='Output'
					onChange={(e) => {
						setOutputVal(e.target.value);
					}}
				/>
			</div>
		</div>
	);
}
