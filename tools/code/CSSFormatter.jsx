import { useState } from 'react';
import { minify } from 'html-minifier-terser';
import { options } from 'utils/htmlminifier.config';
import Textarea from 'components/Textarea';

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
				<Textarea label='Input' value={inputVal} handleChange={setInputVal} />
			</div>
			<div className='col-span-1'>
				<button onClick={handleEncode}>Minify</button>
				<button onClick={handleReset}>Reset</button>
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
