import { useState } form 'react'; 

function SubmitButton() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitHandler() {
		setIsSubmitted(true);
	};

	return (
		<button onClick={submitHandler}>
			{ isSubmitted ? 'Loading...': 'Submit' }
		</button>
	);
};

export default SubmitButton;