import { useState } from 'react';
import { minify } from 'terser';
import Textarea from 'components/Textarea';

export default function JavaScriptFormatter() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');

	const handleFormat = async () => {
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
		<div className='grid grid-cols-5'>
			<div className='col-span-2'>
				<Textarea label='Input' value={inputVal} handleChange={setInputVal} />
			</div>
			<div className='col-span-1'>
				<button onClick={handleFormat}>Format</button>
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
