import React from 'react';
import ReactDOM from 'react-dom';
import useModal from '../../hooks/useModal';
import FormCreate from '../../components/Forms/FormCreate';
import FormEdit from '../../components/Forms/FormEdit';

import './modal.css'

const ModalBody = ({ isShowing, hide, form, item}) => isShowing ? ReactDOM.createPortal(
	<React.Fragment>
		<div className="modal-overlay" />
		<div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-form-container">
					{form === "FormCreate" ? <FormCreate />
						: <FormEdit item={item} />
					}
				</div>
			</div>
		</div>
	</React.Fragment>, document.body
) : null;

const Modal = ({ form, item }) => {
	const { isShowing, toggle } = useModal();

	return (
		<>
			<button className="button-default" onClick={toggle}>
				{form === "FormCreate" ? 'Create Product'
					: "Edit Product"
				}
			</button>
			<ModalBody
				isShowing={isShowing}
				hide={toggle}
				form={form}
				item={item}
			/>
		</>
	)
}

export default Modal;