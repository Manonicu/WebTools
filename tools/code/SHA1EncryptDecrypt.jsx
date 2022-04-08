import { useState } from 'react';
import Textarea from 'components/Textarea';

export default function SHA1EncryptDecrypt() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');
	const handleEncode = () => {
		inputVal && setOutputVal(encodeURIComponent(inputVal));
	};
	const handleDecode = () => {
		inputVal && setOutputVal(decodeURIComponent(inputVal));
	};

	return (
		<div className='grid grid-cols-5'>
			<div className='col-span-2'>
				<Textarea label='Input' value={inputVal} handleChange={setInputVal} />
			</div>
			<div className='col-span-1'>
				<button onClick={handleEncode}>Encode</button>
				<button onClick={handleDecode}>Decode</button>
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
