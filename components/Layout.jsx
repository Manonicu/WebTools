import Filter from './home/Filter';

const Layout = ({ children }) => {

	return (
		<div className='home'>
			<Filter />
			{children}
		</div>
	);
};

export default Layout;
