import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';
const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable,playAgain }) => {
	let finalmsg = '';
	let finalmsgrevealword = '';
	let playable = true;
	let ans = checkWin(correctLetters, wrongLetters, selectedWord);
	if (ans === 'win') {
		finalmsg = 'Congrats,you won!';
		playable = false;
	} else if (ans === 'lose') {
		finalmsg = 'You LOST!';
		finalmsgrevealword = `...the word was ${selectedWord}`;
		playable = false;
	}
	useEffect(() => setPlayable(playable));
	return (
		<div className="popup-container" style={finalmsg !== '' ? { display: 'flex' } : {}}>
			<div className="popup">
				<h2>{finalmsg}</h2>
				<h3>{finalmsgrevealword}</h3>
				<button onClick={playAgain}>Play Again</button>
			</div>
		</div>
	);
};

export default Popup;
