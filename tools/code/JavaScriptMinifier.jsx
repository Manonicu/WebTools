import { useState } from 'react';
import { minify } from 'terser';
import Textarea from 'components/Textarea';

export default function JavaScriptMinifier() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');

	const handleMinify = async () => {
		if (inputVal) {
			const { code } = await minify(inputVal);
			setOutputVal(code);
		}
	};
	const handleReset = () => {
		setInputVal('');
		setOutputVal('');
	};

	return (
		<div className='grid grid-cols-5 gap-5'>
			<div className='col-span-2'>
				<Textarea label='Input' value={inputVal} handleChange={setInputVal} />
			</div>
			<div className='flex flex-col justify-center gap-5 col-span-1'>
				<button className='py-2 text-center w-full' onClick={handleMinify}>
					Minify
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
