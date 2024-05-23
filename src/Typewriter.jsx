import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Typewriter = ({ text, speed = 500 }) => {
	const [displayedText, setDisplayedText] = useState('');

	useEffect(() => {
		if (displayedText.length < text.length) {
			const timeoutId = setTimeout(() => {
				setDisplayedText(text.substring(0, displayedText.length + 1));
			}, speed);
			return () => clearTimeout(timeoutId);
		}
	}, [displayedText, text, speed]);

	return (
		<ul>
			{displayedText.split('').map((char, index) => (
				<li key={index}>{char}</li>
			))}
		</ul>
	);
};

Typewriter.propTypes = {
	text: PropTypes.string.isRequired,
	speed: PropTypes.number,
};

export default Typewriter;
