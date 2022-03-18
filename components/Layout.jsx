import { Grid } from '@chakra-ui/react';

export default function Layout(props) {
	const { children, ...params } = props;
	return (
		<Grid
			gap={4}
			bgColor={'white'}
			p={4}
			rounded={'md'}
			h={'calc(100% - 50px)'}
			{...params}
		>
			{children}
		</Grid>
	);
}
