import React, { useState } from 'react';
import Modal from './Components/Modal';
import Backdrop from './Components/Modal/Backdrop';
import Footer from './Components/Footer';

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#4cae4c' }}>
				<button style={{ color: 'white', padding: '8px', width: '100%' }} type="button" onClick={ () => setIsOpen(true) }>Open Modal</button>
			</div>
			<div className={`modal modal-bottom ${isOpen ? 'collapse in' : 'collapse'}`}>
				<Modal setIsOpen={setIsOpen} />
			</div>
			{isOpen && <Backdrop setIsOpen={setIsOpen} />}
			<Footer />
		</div>
	);
}

export default App;
