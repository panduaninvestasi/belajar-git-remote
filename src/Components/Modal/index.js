import './style.css';

const Modal = ({ setIsOpen }) => {
	return (
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" onClick={ () => setIsOpen(false) }>×</button>
					<div className="modal-title">Modal Header</div>
				</div>
				<div className="modal-body">
					<p>Some text in the modal.</p>
				</div>
			</div>
		</div>
	);
}

export default Modal;