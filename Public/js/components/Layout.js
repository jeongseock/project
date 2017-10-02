import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Zodiac from "./Zodiac";

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			symbol: "hi"
		};
	}
	changeSymbol(symbol){
		this.setState({symbol});
	}

	render() {
		return(
			<form>
				<Header title = "Which Zodiac are you?"/>
				<p>Type your Month/ Date of Birth:(ie. 02/17 if born on February 17th)</p>
				<Zodiac changeSymbol = {this.changeSymbol.bind(this)} symbol = {this.state.symbol}/>
			</form>

			);
	}
}
