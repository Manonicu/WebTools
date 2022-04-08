import { useState } from 'react';
import { minify } from 'html-minifier-terser';
import { options } from 'utils/htmlminifier.config';
import Textarea from 'components/Textarea';

export default function HTMLFormatter() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');

	const handleFormat = async () => {
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
			<div className='flex flex-col justify-center gap-5 col-span-1'>
				<button className='py-2 text-center w-full' onClick={handleFormat}>
					Format
				</button>
				<button className='py-2 text-center w-full' onClick={handleReset}>
					Reset
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
