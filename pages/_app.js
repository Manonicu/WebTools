import '../styles/globals.scss';
import tools from '../utils/tools';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [cur, setCur] = useState('code');
	const [key, setKey] = useState(0);

	const handleCur = (item) => {
		setCur(item);
		setKey(0);
	};

	const handleKey = async (key) => {
		if (!tools[cur][key]['draft']) {
			setKey(key);
			await router.push(`/${cur}/${tools[cur][key].component}`);
		}
	};

	return (
		<div className='container-fluid'>
			<Tools data={tools} cur={cur} index={key} handleChange={handleCur} />
			<SubTools
				data={tools[cur]}
				cur={cur}
				index={key}
				handleChange={handleKey}
			/>

			<div className='tools-content'>
				<Component {...pageProps} />
			</div>
		</div>
	);
}

const Tools = (props) => {
	const cls = (item) =>
		props.cur === item ? 'tools-item active' : 'tools-item';

	return (
		<div className='tools'>
			<div className='logo'>All In One</div>
			{Object.keys(props.data)?.map((item) => (
				<div
					className={cls(item)}
					key={item}
					onClick={() => props.handleChange(item)}
				>
					<span className='z-50'>{`${item} Tools`}</span>
				</div>
			))}
		</div>
	);
};

const SubTools = (props) => {
	const isDraft = (item) =>
		item.draft ? 'sub-tools-item text-gray-300' : 'sub-tools-item';
	const cls = ({ item, key }) =>
		props.index === key ? `${isDraft(item)} active` : isDraft(item);

	console.log(props.index);
	return (
		<div className='sub-tools'>
			{props.data?.map((item, key) => (
				<div
					className={cls({ item, key })}
					key={item.title}
					onClick={() => props.handleChange(key)}
				>
					<span className='flex block gap-2 items-center z-50'>
						<Image
							src={item.imageUrl}
							width={16}
							height={16}
							about={item.title}
						/>
						{item.title}
					</span>
				</div>
			))}
		</div>
	);
};

export default MyApp;
