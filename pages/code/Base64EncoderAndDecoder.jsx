import { useState } from 'react';

export default function Base64EncoderAndDecoder() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');
	const encode = () => {
		inputVal && setOutputVal(btoa(inputVal));
	};
	const decode = () => {
		inputVal && setOutputVal(atob(inputVal));
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
					onClick={encode}
				>
					Encode
				</button>
				<button
					className='w-full h-12 bg-blue-500 rounded text-white'
					onClick={decode}
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
