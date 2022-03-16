import { useState } from 'react';
import { Button, Grid, GridItem, Textarea } from '@chakra-ui/react';
import { minify } from 'html-minifier-terser';
import { options } from 'utils/htmlminifier.config';
import Layout from 'components/Layout';

export default function HTMLMinifier() {
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
		<Layout templateColumns='1fr auto 1fr'>
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
						Minify
					</Button>
					<Button size='md' colorScheme='orange' onClick={handleReset}>
						Reset
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
		</Layout>
	);
}
