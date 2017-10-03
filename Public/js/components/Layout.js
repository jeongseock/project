import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Zodiac from "./Zodiac";

export default class Layout extends React.Component {

	render() {
		return(
			<div>
				<Header title = "Which Zodiac are you?"/>
				<p>Type your Month/ Date of Birth:(ie. 02/17 if born on February 17th)</p>
				<Zodiac sign/>
			</div>

			);
	}
}
