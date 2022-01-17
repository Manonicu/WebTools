import { Input, Grid, Button } from '@nextui-org/react';
import qrcode from 'qrcode';
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
				<Grid.Container gap={4}>
					<Grid md={10}>
						<Input
							name='txt'
							placeholder='URL Or Text'
							fullWidth={true}
							initialValue={txt}
							shadow={false}
							value={txt}
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid>
						<Button color='warning' auto onClick={this.reset}>
							Reset
						</Button>
					</Grid>
				</Grid.Container>
				<Grid.Container gap={4}>
					<Grid>
						<Input
							name='errorCorrectionLevel'
							shadow={false}
							labelPlaceholder='Error Correction Level'
							color='primary'
							value={errorCorrectionLevel}
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid>
						<Input
							name='quality'
							shadow={false}
							labelPlaceholder='quality'
							color='primary'
							type='number'
							step='0.1'
							value={quality}
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid>
						<Input
							name='margin'
							shadow={false}
							labelPlaceholder='margin'
							color='primary'
							type='number'
							value={margin}
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid>
						<Input
							name='width'
							shadow={false}
							labelPlaceholder='width'
							color='primary'
							type='number'
							step='10'
							value={width}
							onChange={this.handleClick}
						/>
					</Grid>
					<Grid>
						<Input
							name='height'
							shadow={false}
							labelPlaceholder='height'
							color='primary'
							type='number'
							step='10'
							value={height}
							onChange={this.handleClick}
						/>
					</Grid>
				</Grid.Container>

				<Grid.Container gap={4} justify='center'>
					<Grid>
						<img
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
