import qrcode from 'qrcode';
import React, { useEffect, useState } from 'react';
import {
	GridItem,
	Input,
	Button,
	Stack,
	Center,
	Image,
} from '@chakra-ui/react';
import { DownloadIcon } from '@heroicons/react/solid';
import Layout from 'components/Layout';

const config = {
	errorCorrectionLevel: 'H',
	type: 'image/webp',
	quality: 1,
	margin: 1,
	width: 200,
	height: 200,
};

export default function Index() {
	const [txt, setTxt] = useState('https://manon.icu/');
	const [url, setUrl] = useState('');

	const DownloadQRCode = () => {
		const a = document.createElement('a'); //Create <a>
		a.href = url; //Image Base64 Goes here
		a.download = `${txt}.webp`; //File name Here
		a.click(); //Downloaded file
	};

	const generateCode = () => {
		qrcode.toDataURL(txt, config, function (err, url) {
			setUrl(url);
		});
	};

	const reset = () => {
		setUrl('https://manon.icu/');
	};

	useEffect(() => {
		generateCode();
	}, [txt]);

	return (
		<Layout templateRows='50px auto'>
			<GridItem display={'flex'} gap={4} h={'100%'}>
				<Input
					type='text'
					value={txt}
					onChange={(e) => setTxt(e.target.value)}
				/>
				<Button colorScheme={'twitter'} onClick={reset}>
					Reset
				</Button>
			</GridItem>

			<GridItem>
				<Center h={400}>
					<Stack>
						<Image src={url} alt={txt} />
						<Button
							leftIcon={<DownloadIcon />}
							colorScheme='twitter'
							onClick={DownloadQRCode}
						>
							Download
						</Button>
					</Stack>
				</Center>
			</GridItem>
		</Layout>
	);
}
