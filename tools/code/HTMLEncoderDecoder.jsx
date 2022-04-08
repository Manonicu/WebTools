import { useState } from 'react';
import Textarea from 'components/Textarea';
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
		<div className='grid grid-cols-5 gap-5'>
			<div className='col-span-2'>
				<Textarea label='Input' value={inputVal} handleChange={setInputVal} />
			</div>
			<div className='flex flex-col justify-center gap-5 col-span-1'>
				<button className='py-2 text-center w-full' onClick={handleEncode}>
					Encode
				</button>
				<button className='py-2 text-center w-full' onClick={handleDecode}>
					Decode
				</button>
			</div>
			<div className='col-span-2'>
				<Textarea
					label='Output'
					value={outputVal}
					handleChange={setOutputVal}
				/>
			</div>
		</div>
	);
}
