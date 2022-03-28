import React, { useEffect, useState } from 'react';
import {
	Input,
	Text,
	Select,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Checkbox,
	Button,
	GridItem,
} from '@chakra-ui/react';
import { DownloadIcon } from '@heroicons/react/solid';
import Layout from 'components/Layout';

const JsBarcode = require('jsbarcode');

const Barcodes = [
	{ value: 'CODE128', label: 'CODE 128' },
	{ value: 'EAN13', label: 'EAN13' },
	{ value: 'UPC', label: 'UPC' },
	{ value: 'EAN8', label: 'EAN8' },
	{ value: 'EAN5', label: 'EAN5' },
	{ value: 'EAN2', label: 'EAN2' },
	{ value: 'CODE39', label: 'CODE 39' },
	{ value: 'ITF14', label: 'ITF-14' },
	{ value: 'MSI', label: 'MSI' },
	{ value: 'MSI10', label: 'MSI10' },
	{ value: 'MSI11', label: 'MSI11' },
	{ value: 'MSI1010', label: 'MSI1010' },
	{ value: 'MSI1110', label: 'MSI1110' },
	{ value: 'pharmacode', label: 'Pharmacode' },
	{ value: 'codabar', label: 'Codabar' },
];

export default function BarcodeGenerator() {
	const [options, setOptions] = useState({
		text: '0123456789',
		format: 'CODE128',
		width: 2,
		height: 100,
		displayValue: true,
	});

	const setInputValue = (e) => {
		const { value, name } = e.target;
		setOptions({ ...options, [name]: value });
	};

	const setSliderValue = (e, name) => {
		setOptions({ ...options, [name]: e });
	};

	const download = () => {
		console.log('download');
	};

	useEffect(() => {
		const { text, ...params } = options;
		JsBarcode('#barcode', text, params);
	}, [options]);

	return (
		<Layout
			templateColumns='repeat(3,1fr)'
			gap={8}
			templateRows='50px 50px auto'
		>
			<GridItem alignItems='start' colSpan={2}>
				<Text textColor='gray.500' fontSize='xs'>
					Barcode Value
				</Text>
				<Input
					name='text'
					value={options.text}
					type='txt'
					onChange={setInputValue}
				/>
			</GridItem>
			<GridItem colSpan={1} alignItems='start'>
				<Text textColor='gray.500' fontSize='xs'>
					Barcode Format
				</Text>
				<Select name='format' value={options.format} onChange={setInputValue}>
					{Barcodes.map(({ value, label }) => (
						<option value={value} key={value}>
							{label}
						</option>
					))}
				</Select>
			</GridItem>
			<GridItem colSpan={1}>
				<Text display='flex' gap={4} textColor='gray.500' fontSize='xs'>
					Barcode Line Width:
					<Text textColor='gray.800' fontWeight='700'>
						{options.width}
					</Text>
				</Text>
				<Slider
					aria-label='width'
					defaultValue={1}
					min={1}
					max={4}
					value={options.width}
					onChange={(v) => setSliderValue(v, 'width')}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
			</GridItem>
			<GridItem colSpan={1}>
				<Text display='flex' gap={4} textColor='gray.500' fontSize='xs'>
					Barcode Line Width:
					<Text textColor='gray.800' fontWeight='700'>
						{options.height}
					</Text>
				</Text>
				<Slider
					aria-label='height'
					defaultValue={100}
					min={100}
					max={200}
					value={options.height}
					onChange={(v) => setSliderValue(v, 'height')}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
			</GridItem>
			<GridItem colSpan={1}>
				<Checkbox
					defaultChecked
					isChecked={options.displayValue}
					onChange={() =>
						setOptions({ ...options, displayValue: !options.displayValue })
					}
				>
					Display Value
				</Checkbox>
			</GridItem>
			<GridItem colSpan={3} display={'grid'} placeItems={'center'}>
				<svg id='barcode'></svg>
				<Button
					mt={4}
					leftIcon={<DownloadIcon />}
					colorScheme='twitter'
					onClick={download}
				>
					Download
				</Button>
			</GridItem>
		</Layout>
	);
}
