const Backdrop = ({ setIsOpen }) => {
	return (
		<div className="modal-backdrop" onClick={ () => setIsOpen(false) }></div>
	);
}

export default Backdrop;