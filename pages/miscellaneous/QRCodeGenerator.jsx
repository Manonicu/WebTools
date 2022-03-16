import qrcode from 'qrcode';
import React, { useEffect, useState } from 'react';

const config = {
	errorCorrectionLevel: 'H',
	type: 'image/png',
	quality: 0.9,
	margin: 1,
	width: 400,
	height: 400,
};

export default function Index() {
	const [txt, setTxt] = useState('https://manon.icu/');
	const [url, setUrl] = useState('');

	const DownloadQRCode = () => {
		const a = document.createElement('a'); //Create <a>
		a.href = url; //Image Base64 Goes here
		a.download = `${txt}.jpg`; //File name Here
		a.click(); //Downloaded file
	};

	const generateCode = () => {
		qrcode.toDataURL(txt, config, (err, url) => {
			setUrl(url);
		});
	};

	const reset = () => {
		console.log(111);
	};

	useEffect(() => {
		generateCode();
	}, [txt]);

	return (
		<div className='w-full h-full bg-white p-4 rounded'>
			<div className='flex gap-4'>
				<input
					className='appearance-none w-full text-sm leading-6 bg-transparent border text-slate-900 placeholder:text-slate-400 rounded-md p-2'
					type='text'
					value={txt}
					onChange={(e) => setTxt(e.target.value)}
				/>
				<button
					className='bg-blue-500 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white'
					onClick={reset}
				>
					Reset
				</button>
			</div>

			<div className='p-10'>
				{url && (
					<img id='qrcode' className='mx-auto mb-4' src={url} alt={txt} />
				)}

				<button
					className='mx-auto block bg-blue-500 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white'
					onClick={DownloadQRCode}
				>
					Download
				</button>
			</div>
		</div>
	);
}
