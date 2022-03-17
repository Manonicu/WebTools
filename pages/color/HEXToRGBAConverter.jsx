import { useEffect, useState } from 'react';
import { Button, GridItem, Input } from '@chakra-ui/react';
import Layout from 'components/Layout';
import { hexToRGB } from 'utils/color.utils';

export default function HEXToRGBAConverter() {
	const [inputVal, setInputVal] = useState('#0000ff');
	const [outputVal, setOutputVal] = useState('');

	useEffect(() => {
		const handleConverter = () => {
			inputVal && setOutputVal(hexToRGB(inputVal));
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
					onClick={() => setOutputVal(hexToRGB(inputVal))}
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
