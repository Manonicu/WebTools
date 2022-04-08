import { useEffect, useState } from 'react';
import { hexToRGB } from 'utils/color.utils';
import Textarea from 'components/Textarea';

export default function HEXToRGBAConverter() {
	const [inputVal, setInputVal] = useState('#0000ff');
	const [outputVal, setOutputVal] = useState('');

	const handleConverter = () => {
		inputVal && setOutputVal(hexToRGB(inputVal));
	};

	useEffect(() => {
		handleConverter();
	}, [inputVal]);

	return (
		<div className='grid grid-cols-5 gap-5'>
			<div className='col-span-2'>
				<Textarea label='Input' value={inputVal} handleChange={setInputVal} />
			</div>
			<div className='flex flex-col justify-center gap-5 col-span-1'>
				<button className='py-2 text-center w-full' onClick={handleConverter}>
					Converter
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
