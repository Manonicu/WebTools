import { useState } from 'react';
import { Button, Grid, GridItem, Textarea } from '@chakra-ui/react';
const he = require('he');

export default function HTMLEncoderAndDecoder() {
	const [inputVal, setInputVal] = useState('');
	const [outputVal, setOutputVal] = useState('');
	const handleEncode = () => {
		inputVal && setOutputVal(he.encode(inputVal));
	};
	const handleDecode = () => {
		inputVal && setOutputVal(he.decode(inputVal));
	};

	return (
		<Grid
			templateColumns='1fr auto 1fr'
			gap={4}
			bgColor={'white'}
			p={4}
			rounded={'md'}
			h={'calc(100% - 50px)'}
		>
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
		</Grid>
	);
}
