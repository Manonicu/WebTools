import { useState } from 'react';
import { Button, Grid, GridItem, Textarea } from '@chakra-ui/react';
import Layout from 'components/Layout';

export default function JSONTreeViewer() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');
	const handleEncode = () => {
		inputVal && setOutputVal(encodeURIComponent(inputVal));
	};
	const handleDecode = () => {
		inputVal && setOutputVal(decodeURIComponent(inputVal));
	};

	return (
		<>
			<GridItem h='50%'>
				<Textarea
					h='100%'
					value={inputVal}
					placeholder='Input'
					resize='none'
					onChange={(e) => {
						setInputVal(e.target.value);
					}}
				/>
			</GridItem>
			<GridItem h='50%'>
				<Grid h='100%' placeItems='center'>
					<Button size='md' colorScheme='twitter' onClick={handleEncode}>
						Encode
					</Button>
					<Button size='md' colorScheme='twitter' onClick={handleDecode}>
						Decode
					</Button>
				</Grid>
			</GridItem>
			<GridItem h='50%'>
				<Textarea
					h='100%'
					value={outputVal}
					placeholder='Output'
					resize='none'
					onChange={(e) => {
						setOutputVal(e.target.value);
					}}
				/>
			</GridItem>
		</>
	);
}
