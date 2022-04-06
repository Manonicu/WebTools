import qrcode from 'qrcode';
import React, { useEffect, useState } from 'react';
import Image from 'components/Image';

const config = {
	errorCorrectionLevel: 'H',
	type: 'image/webp',
	quality: 1,
	margin: 1,
	width: 200,
	height: 200,
};

export default function QRCodeGenerator() {
	const [txt, setTxt] = useState('https://manon.icu/');
	const [url, setUrl] = useState('');

	const DownloadQRCode = () => {
		const a = document.createElement('a'); //Create <a>
		a.href = url; //Image Base64 Goes here
		a.download = `${txt}.webp`; //File name Here
		a.click(); //Downloaded file
	};

	const reset = () => {
		setUrl('https://manon.icu/');
	};

	useEffect(() => {
		const generateCode = () => {
			qrcode.toDataURL(txt, config, function (err, url) {
				setUrl(url);
			});
		};
		generateCode();
	}, [txt]);

	return (
		<>
			<div className='grid grid-cols-6 gap-6 mb-12 h-9'>
				<input
					className='col-span-5'
					type='text'
					value={txt}
					onChange={(e) => setTxt(e.target.value)}
				/>
				<button
					className='col-span-1 bg-blue-500 text-white rounded'
					onClick={reset}
				>
					Reset
				</button>
			</div>

			{url ? (
				<Image
					src={url}
					alt={txt}
					className='w-80 h-80 mx-auto mb-12'
					width={320}
					height={320}
				/>
			) : (
				<Image
					src='/qrcode.png'
					alt={txt}
					className='w-80 h-80 mx-auto mb-12'
					width={320}
					height={320}
				/>
			)}
			<button
				className='block w-80 py-2 text-center mx-auto'
				onClick={DownloadQRCode}
			>
				Download
			</button>
		</>
	);
}
