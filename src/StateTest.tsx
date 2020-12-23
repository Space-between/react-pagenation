import React, { useState } from 'react';

export default function StateTest() {
	const [just, setJust] = useState(false);

	const human = () => {
		setJust(true);
	};

	return (
		<div data-testId="stateless">
			<p>{just}</p>
			<button type="button" onClick={human}>
				ggggg
			</button>
		</div>
	);
}
