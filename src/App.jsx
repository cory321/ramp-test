import { useState, useEffect } from 'react';
import Typewriter from './Typewriter';

const App = () => {
	const [text, setText] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchText = async () => {
			try {
				const response = await fetch(import.meta.env.VITE_RAMP_SECRET_URL);
				const data = await response.text();
				setText(data);
			} catch (error) {
				console.error('Error fetching text:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchText();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return <Typewriter text={text} />;
};

export default App;
