import React from "react";
import Symbol from "./Zodiac/Symbol";
export default class Zodiac extends React.Component {
	handleChange(e){
		const date = e.target.value;
		this.props.changeSymbol(date);
	}
	render() {
		return(
			<div>
			<h1>{this.props.symbol}</h1>
			<input onSubmit = {this.handleChange.bind(this)}/>
			</div>
			);
	}
}