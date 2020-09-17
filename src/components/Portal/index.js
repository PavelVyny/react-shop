import { useEffect, useState } from "react";
import { createPortal } from "react-dom";


const Portal = ({ children, el = "div" }) => {
	const [container] = useState(document.createElement(el));

	useEffect(() => {
		document.body.appendChild(container);
		document.body.style.overflow = "hidden";

		return () => {
			document.body.removeChild(container);
			document.body.style.overflow = "auto";
		};
	}, [container]);

	return createPortal(children, container);
};

export default Portal;