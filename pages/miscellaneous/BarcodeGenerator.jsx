import React, { useEffect, useState } from 'react';
import {
	Input,
	Stack,
	Text,
	VStack,
	Select,
	Grid,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Checkbox,
	Center,
	Button,
} from '@chakra-ui/react';
import { DownloadIcon } from '@heroicons/react/solid';

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
		console.log(value, name);
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
		<div className='w-full h-full bg-white p-4 rounded'>
			<Grid templateColumns='70% auto' gap={12} mb={12}>
				<VStack alignItems='start'>
					<Text textColor='gray.500' fontSize='xs'>
						Barcode Value
					</Text>
					<Input
						name='text'
						value={options.text}
						type='txt'
						onChange={setInputValue}
					/>
				</VStack>
				<VStack alignItems='start'>
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
				</VStack>
			</Grid>
			<Grid templateColumns='repeat(3,1fr)' gap={12}>
				<Stack>
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
				</Stack>
				<Stack>
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
				</Stack>
				<Stack>
					<Checkbox
						defaultChecked
						isChecked={options.displayValue}
						onChange={() =>
							setOptions({ ...options, displayValue: !options.displayValue })
						}
					>
						Display Value
					</Checkbox>
				</Stack>
			</Grid>
			<Center h={400}>
				<Stack>
					<svg id='barcode'></svg>
					<Button
						leftIcon={<DownloadIcon />}
						colorScheme='twitter'
						onClick={download}
					>
						Download
					</Button>
				</Stack>
			</Center>
		</div>
	);
}
