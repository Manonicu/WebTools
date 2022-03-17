import { useEffect, useState } from 'react';
import { Button, GridItem, Input } from '@chakra-ui/react';
import Layout from 'components/Layout';
import { RGBAToHexA } from 'utils/color.utils';

export default function RGBAToHEXConverter() {
	const [inputVal, setInputVal] = useState('rgba(0,0,255,0.5)');
	const [outputVal, setOutputVal] = useState('');

	useEffect(() => {
		const handleConverter = () => {
			inputVal && setOutputVal(RGBAToHexA(inputVal));
		};
		handleConverter();
	}, [inputVal]);

	return (
		<Layout templateColumns='1fr auto 1fr'>
			<GridItem>
				<Input
					value={inputVal}
					placeholder='Input'
					onChange={(e) => {
						setInputVal(e.target.value);
					}}
				/>
			</GridItem>
			<GridItem h='50%'>
				<Button
					size='md'
					colorScheme='pink'
					onClick={() => setOutputVal(RGBAToHexA(inputVal))}
				>
					Converter
				</Button>
			</GridItem>
			<GridItem>
				<Input
					value={outputVal}
					placeholder='Output'
					onChange={(e) => {
						setOutputVal(e.target.value);
					}}
				/>
			</GridItem>
		</Layout>
	);
}
