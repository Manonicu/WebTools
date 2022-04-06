import { useState } from 'react';
const he = require('he');

export default function HTMLEncoderDecoder() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');
	const handleEncode = () => {
		inputVal && setOutputVal(he.encode(inputVal));
	};
	const handleDecode = () => {
		inputVal && setOutputVal(he.decode(inputVal));
	};

	return (
		<div className='grid grid-cols-5'>
			<div className='col-span-2'>
				<input
					type='textarea'
					value={inputVal}
					placeholder='Input'
					onChange={(e) => {
						setInputVal(e.target.value);
					}}
				/>
			</div>
			<div className='col-span-1'>
				<button onClick={handleEncode}>Encode</button>
				<button onClick={handleDecode}>Decode</button>
			</div>
			<div className='col-span-2'>
				<input
					type='textarea'
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
