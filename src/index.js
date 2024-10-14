import { render } from "@wordpress/element";

import { MyFirstApp } from './my-first-app'

window.addEventListener(
	'load',
	function () {
		render(
			<MyFirstApp />,
			document.querySelector( '#my-first-gutenberg-app' )
		);
	},
	false
);
