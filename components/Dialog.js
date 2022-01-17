import { Button, Modal, Text } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { hide } from '../store/dialog';

export default function Dialog(props) {
	const state = useSelector((state) => state.dialog);
	const dispatch = useDispatch();

	return (
		<Modal
			width='82%'
			closeButton
			blur
			aria-labelledby='modal-title'
			open={state.visible}
			onClose={() => dispatch(hide())}
		>
			<Modal.Header>
				<Text className='modal-title' size={18} sm='false' weight='bold'>
					{state.data?.title}
				</Text>
			</Modal.Header>
			<Modal.Body>{props.children}</Modal.Body>
			<Modal.Footer>
				{props.cancelTxt && (
					<Button auto flat color='error' onClick={() => props.cancelEvt()}>
						{props.cancelTxt}
					</Button>
				)}
				<Button auto onClick={() => props.confirmEvt()}>
					{props.confirmTxt}
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
