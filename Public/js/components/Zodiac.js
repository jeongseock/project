import React from "react";

export default class Zodiac extends React.Component {
	constructor(){
		super();
		this.state = {sign: 'hi', month:'', day:''};

	}
	handleSubmit(e){
		this.setState({sign: "hello"});

	}
	handleChMon(e){
		this.setState({month: event.target.value});
		console.log(this.state.month);
	}
	handleChDay(e){
		this.setState({day: event.target.value});
	}	

	render() {
			console.log(this.state.month);
		return(
			<form onSubmit = {this.handleSubmit.bind(this)}>
			<input type = "text" onChange = {this.handleChMon.bind(this)}/>

			<input type = "text" onChange = {this.handleChDay.bind(this)}/>

			<input type="submit" value="submit"/>

			<h1>{this.state.sign}</h1>

			</form>
			);
	}
}