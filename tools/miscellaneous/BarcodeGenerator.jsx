// TODO download
import React, { useEffect, useState } from 'react';

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
		const { value } = e.target;
		setOptions({ ...options, [name]: value });
	};

	const download = () => {
		console.log('download');
	};

	useEffect(() => {
		const { text, ...params } = options;
		JsBarcode('#barcode', text, params);
	}, [options]);

	return (
		<>
			<div className='grid grid-cols-3 grid-rows-3 gap-4'>
				<div className='col-span-1'>
					<div className='text-gray-500 text-xs mb-2'>Barcode Value</div>
					<input
						name='text'
						value={options.text}
						type='txt'
						onChange={(e) => setInputValue(e)}
					/>
				</div>
				<div className='col-span-1'>
					<div className='text-gray-500 text-xs mb-2'>Barcode Format</div>
					<select name='format' value={options.format} onChange={setInputValue}>
						{Barcodes.map(({ value, label }) => (
							<option value={value} key={value}>
								{label}
							</option>
						))}
					</select>
				</div>
				<div className='col-span-1'>
					<div className='flex gap-4 text-gray-500 text-xs mb-2'>
						Barcode Line Width:
						<div className='text-gray-800 font-extrabold'>{options.width}</div>
					</div>
					<input
						type='range'
						name='width'
						id='width'
						min={1}
						max={4}
						value={options.width}
						onChange={(e) => setSliderValue(e, 'width')}
					/>
				</div>
				<div className='col-span-1'>
					<div className='flex gap-4 text-gray-500 text-xs mb-2'>
						Barcode Line Width:
						<div className='text-gray-800 font-extrabold'>{options.height}</div>
					</div>
					<input
						type='range'
						name='height'
						id='height'
						min={100}
						max={200}
						value={options.height}
						onChange={(e) => setSliderValue(e, 'height')}
					/>
				</div>
				<div className='col-span-1'>
					<div className='flex gap-4 text-gray-500 text-xs mb-2'>
						Display Value:
						<div className='text-gray-800 font-extrabold'>
							{JSON.stringify(options.displayValue)}
						</div>
					</div>
					<input
						type='checkbox'
						checked={options.displayValue}
						onChange={(e) => {
							console.log(e);
							setOptions({ ...options, displayValue: e.target.checked });
						}}
					/>
				</div>
			</div>
			<svg id='barcode' className='w-80 h-80 mx-auto mb-4' />
			<button className='w-80 py-2 text-center mx-auto' onClick={download}>
				Download
			</button>
		</>
	);
}
