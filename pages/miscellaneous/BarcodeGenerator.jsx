import { Checkbox, Grid, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Image from 'next/image';
const JsBarcode = require('jsbarcode');

const options = [
	{ value: 'CODE128', label: 'CODE128' },
	{ value: 'CODE128 A/B/C', label: 'CODE128 A/B/C' },
	{ value: 'EAN-13', label: 'EAN-13' },
	{ value: 'EAN-8', label: 'EAN-8' },
	{ value: 'EAN-5', label: 'EAN-5' },
	{ value: 'EAN-2', label: 'EAN-2' },
	{ value: 'UPC(A)', label: 'UPC(A)' },
	{ value: 'UPC(E)', label: 'UPC(E)' },
	{ value: 'CODE 39', label: 'CODE 39' },
	{ value: 'ITF', label: 'ITF' },
	{ value: 'ITF-14', label: 'ITF-14' },
];

export default function BarcodeGenerator() {
	const [config, setConfig] = useState({
		txt: 'manon.icu',
		lineWidth: 1,
		lineHeight: 100,
		width: 400,
		height: 400,
		checked: true,
	});
	const [selectedOption, setSelectedOption] = useState(null);

	const handleClick = (event) => {
		setConfig({ ...config, [event.target.name]: event.target.value });
		JsBarcode('#qrcode', config.txt);
	};

	useEffect(() => {
		JsBarcode('#qrcode', config.txt);
	}, [config.txt]);

	return (
		<>
			<Grid.Container gap={4}>
				<Grid xs={8}>
					<Input
						size='sm'
						name='txt'
						labelPlaceholder='Barcode Value'
						fullWidth={true}
						initialValue={config.txt}
						shadow={false}
						value={config.txt}
						onChange={handleClick}
					/>
				</Grid>
				<Grid xs={4}>
					<Select
						defaultValue={selectedOption}
						onChange={setSelectedOption}
						options={options}
					/>
				</Grid>
			</Grid.Container>
			<Grid.Container gap={4}>
				<Grid xs={4} sm={4} md={6}>
					<Input
						size='sm'
						name='lineWidth'
						shadow={false}
						labelPlaceholder='Barcode Line Width'
						color='primary'
						type='number'
						step='1'
						max={4}
						min={1}
						fullWidth
						value={config.lineWidth}
						onChange={handleClick}
					/>
				</Grid>
				<Grid xs={4} sm={4} md={6}>
					<Input
						size='sm'
						name='lineHeight'
						shadow={false}
						labelPlaceholder='Barcode Line Height'
						color='primary'
						type='number'
						max={200}
						min={1}
						step='1'
						fullWidth
						value={config.lineHeight}
						onChange={handleClick}
					/>
				</Grid>
				<Grid xs={4} sm={4} md={6}>
					<Checkbox size='sm' checked={config.checked}>
						Display Value
					</Checkbox>
				</Grid>
			</Grid.Container>
			<Grid.Container gap={4} justify='center'>
				<Grid>
					<Image
						src=''
						id='qrcode'
						width={config.width}
						height={config.height}
						alt={config.txt}
					/>
				</Grid>
			</Grid.Container>
		</>
	);
}
