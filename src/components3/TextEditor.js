import React, { useState } from 'react';

const TextEditor = () => {
	const [isItalic, setIsItalic] = useState(false);
	const [isBold, setIsBold] = useState(false);
	const [isUnderlined, setIsUnderlined] = useState(false);

	const handleToggleItalic = () => {
		setIsItalic(!isItalic);
	};

	const handleToggleBold = () => {
		setIsBold(!isBold);
	};

	const handleToggleUnderline = () => {
   setIsUnderlined(!isUnderlined);
	};


	return (
	<div>
      <div>
			<button onClick={handleToggleItalic}>Italic</button>
			<button onClick={handleToggleBold}>Bold</button>
			<button onClick={handleToggleUnderline}>Underline</button>
      </div>
      <div>
		<p
         style={{
            fontStyle: isItalic ? 'italic' : 'normal',
            fontWeight: isBold ? 'bold' : 'normal',
            textDecoration: isUnderlined ? 'underline' : 'none',
         }}
      >
         Lorem Ipsum
      </p>
      </div>
   </div>
);
};

export default TextEditor;
