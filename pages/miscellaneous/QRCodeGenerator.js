import { Input, Grid, Button } from '@nextui-org/react';
import qrcode from 'qrcode';
import Image from 'next/image';
import React, { Component } from 'react';

const config = {
	txt: 'https://manon.icu/',
	src: '',
	errorCorrectionLevel: 'H',
	type: 'image/jpeg',
	quality: 0.9,
	margin: 1,
	width: 400,
	height: 400,
};

export default class QRCodeGenerator extends Component {
	constructor() {
		super();
		this.state = { ...config };
		this.handleClick = this.handleClick.bind(this);
		this.reset = this.reset.bind(this);
		this.download = this.download.bind(this);
	}

	handleClick(event) {
		const { name, value, type } = event.target;
		this.setState(
			{
				[name]: type === 'number' ? Number(value) : value,
			},
			() => {
				this.generateCode();
			}
		);
	}

	reset() {
		this.setState({ ...config }, () => {
			this.generateCode();
		});
	}

	download() {
		const a = document.createElement('a'); //Create <a>
		a.href = this.state.src; //Image Base64 Goes here
		a.download = `${this.state.txt}.jpg`; //File name Here
		a.click(); //Downloaded file
	}

	generateCode() {
		const { txt, errorCorrectionLevel, quality, margin, width, height, type } =
			this.state;
		qrcode.toDataURL(
			txt,
			{
				errorCorrectionLevel,
				quality,
				margin,
				width,
				height,
				type,
			},
			(err, url) => {
				this.setState({ src: url });
			}
		);
	}

	componentDidMount() {
		this.generateCode();
	}

	render() {
		const { txt, src, errorCorrectionLevel, quality, margin, width, height } =
			this.state;
		return (
			<>
				<Grid.Container fluid gap={4}>
					<Grid md={10} sm={10} xs={10}>
						<Input
							size='sm'
							name='txt'
							placeholder='URL Or Text'
							fullWidth={true}
							initialValue={txt}
							shadow={false}
							value={txt}
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid md={2} sm={2} xs={2}>
						<Button color='warning' auto onClick={this.reset}>
							Reset
						</Button>
					</Grid>
				</Grid.Container>
				<Grid.Container gap={4}>
					<Grid xs={4} sm={2} md={6}>
						<Input
							size='sm'
							name='errorCorrectionLevel'
							shadow={false}
							labelPlaceholder='Level'
							color='primary'
							value={errorCorrectionLevel}
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid xs={4} sm={2} md={6}>
						<Input
							size='sm'
							name='quality'
							shadow={false}
							labelPlaceholder='Quality'
							color='primary'
							type='number'
							step='0.1'
							value={quality}
							max={1}
							min={0.1}
							fullWidth
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid xs={4} sm={2} md={6}>
						<Input
							size='sm'
							name='Margin'
							shadow={false}
							labelPlaceholder='margin'
							color='primary'
							type='number'
							min={1}
							fullWidth
							value={margin}
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid xs={4} sm={2} md={6}>
						<Input
							size='sm'
							name='Width'
							shadow={false}
							labelPlaceholder='width'
							color='primary'
							type='number'
							step='10'
							fullWidth
							value={width}
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid xs={4} sm={2} md={6}>
						<Input
							size='sm'
							name='Height'
							shadow={false}
							labelPlaceholder='height'
							color='primary'
							type='number'
							step='10'
							fullWidth
							value={height}
							onChange={this.handleClick}
						/>
					</Grid>
				</Grid.Container>

				<Grid.Container gap={4} justify='center'>
					<Grid>
						<Image
							id='qrcode'
							width={width}
							height={height}
							src={src}
							alt={txt}
						/>
					</Grid>
				</Grid.Container>
			</>
		);
	}
}
