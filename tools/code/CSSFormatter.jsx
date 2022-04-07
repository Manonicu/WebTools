import { useState } from 'react';
import { minify } from 'html-minifier-terser';
import { options } from 'utils/htmlminifier.config';

export default function CSSFormatter() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');

	const handleEncode = async () => {
		if (inputVal) {
			const output = await minify(inputVal, options);
			setOutputVal(output);
		}
	};
	const handleReset = () => {
		setInputVal('');
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
				<button onClick={handleEncode}>Minify</button>
				<button onClick={handleReset}>Reset</button>
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
