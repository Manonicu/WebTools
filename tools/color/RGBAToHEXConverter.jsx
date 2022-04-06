import { useEffect, useState } from 'react';
import { RGBAToHexA } from 'utils/color.utils';

export default function RGBAToHEXConverter() {
	const [inputVal, setInputVal] = useState('rgba(0,0,255,0.5)');
	const [outputVal, setOutputVal] = useState('');

	const handleConverter = () => {
		inputVal && setOutputVal(RGBAToHexA(inputVal));
	};

	useEffect(() => {
		handleConverter();
	}, [inputVal]);

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
				<button onClick={handleConverter}>Converter</button>
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
