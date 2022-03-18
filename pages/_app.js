import 'styles/globals.scss';
import tools from 'utils/tools';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
	ChakraProvider,
	Alert,
	Grid,
	GridItem,
	Text,
	Box,
	Image,
} from '@chakra-ui/react';
// import theme from 'utils/theme';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [cur, setCur] = useState('code');
	const [key, setKey] = useState(0);

	const handleCur = async (item) => {
		setCur(item);
		setKey(0);
		router.push(`/${cur}/${tools[cur][key].component}`).then(() => {});
	};

	const handleKey = async (key) => {
		if (!tools[cur][key]['draft']) {
			setKey(key);
			router.push(`/${cur}/${tools[cur][key].component}`).then(() => {});
		}
	};

	return (
		<ChakraProvider>
			<Grid
				h='100vh'
				w='100vw'
				overflow='hidden'
				fontFamily='monospace'
				templateColumns='repeat(5, 1fr)'
			>
				<Tools data={tools} cur={cur} index={key} handleChange={handleCur} />
				<SubTools
					data={tools[cur]}
					cur={cur}
					index={key}
					handleChange={handleKey}
				/>

				<GridItem
					colSpan={3}
					p={4}
					h='100%'
					overflowY={'scroll'}
					scrollBehavior={'smooth'}
					bgColor='gray.100'
				>
					<Alert
						status='info'
						h={'50px'}
						display={'flex'}
						alignItems={'center'}
						roundedTop={'md'}
					>
						{tools[cur][key].description}
					</Alert>
					<Component {...pageProps} />
				</GridItem>
			</Grid>
		</ChakraProvider>
	);
}

const Tools = (props) => {
	return (
		<GridItem
			colSpan={1}
			borderRight={1}
			borderColor='gray.200'
			borderStyle='solid'
		>
			<Text
				as='h1'
				p={8}
				fontWeight={700}
				fontSize='2xl'
				dropShadow='2xl'
				textAlign='center'
			>
				All In One
			</Text>
			{Object.keys(props.data)?.map((item) => (
				<Box
					display={'flex'}
					position={'relative'}
					px={8}
					h={12}
					fontSize={'sm'}
					alignItems={'center'}
					borderBottom={1}
					borderStyle={'solid'}
					borderColor={'gray.200'}
					fontWeight={600}
					cursor={'pointer'}
					textTransform={'capitalize'}
					key={item}
					bgColor={props.cur === item ? 'twitter.500' : ''}
					color={props.cur === item ? 'white' : ''}
					onClick={() => props.handleChange(item)}
				>
					{`${item} Tools`}
				</Box>
			))}
		</GridItem>
	);
};

const SubTools = (props) => {
	return (
		<GridItem
			colSpan={1}
			h='100%'
			overflowY={'scroll'}
			scrollBehavior={'smooth'}
		>
			{props.data
				?.filter((item) => !item.draft)
				.map((item, key) => {
					// const colorScheme = props.index === key ? 'twitter' : 'pink';
					return (
						<Box
							display={'flex'}
							position={'relative'}
							px={8}
							h={12}
							gap={4}
							fontSize={'xs'}
							alignItems={'center'}
							borderBottom={1}
							borderStyle={'solid'}
							borderColor={'gray.200'}
							fontWeight={500}
							cursor={'pointer'}
							bgColor={props.index === key ? 'twitter.500' : ''}
							color={props.index === key ? 'white' : ''}
							key={item.title}
							onClick={() => props.handleChange(key)}
						>
							<Image
								src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/${item.imageUrl}`}
								w={4}
								h={4}
								alt={item.title}
							/>
							{item.title}
						</Box>
					);
				})}
		</GridItem>
	);
};

export default MyApp;
