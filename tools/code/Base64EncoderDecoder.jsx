import { useState } from 'react';
import Textarea from 'components/Textarea';

export default function Base64EncoderDecoder() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');
	const handleEncode = () => {
		inputVal && setOutputVal(btoa(inputVal));
	};
	const handleDecode = () => {
		inputVal && setOutputVal(atob(inputVal));
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
