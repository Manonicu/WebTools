export default function Textarea(props) {
	return (
		<div className='relative textarea w-full h-56 p-4 border rounded'>
			<textarea
				name='textarea'
				className='resize-none w-full h-full'
				value={props.value}
				placeholder={props.placeholder}
				onChange={(e) => props.handleChange(e.target.value)}
			/>
			<label
				htmlFor='textarea'
				className='absolute top-0 left-4 px-2 text-gray-400 text-sm z-50 bg-white -translate-y-1/2'
			>
				{props.label}
			</label>
		</div>
	);
}
