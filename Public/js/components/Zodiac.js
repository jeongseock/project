import React from "react";

export default class Zodiac extends React.Component {
	constructor(){
		super();
		this.state = {sign: 'hi', month:'', day:''};

	}
	handleSubmit(e){
		this.setState({sign: "hello"});
		findZodiac();
	}
	handleChMon(e){
		this.setState({month: event.target.value});
	}
	handleChDay(e){
		this.setState({day: event.target.value});
	}	
	findZodiac(){
		return sign;
	}
	render() {
		return(
			<form onSubmit = {this.handleSubmit.bind(this)}>
			<input type = "text" onChange = {this.handleChMon.bind(this)}/>

			<input type = "text" onChange = {this.handleChDay.bind(this)}/>

			<input type="submit" value="submit"/>
			</form>
			);
	}
}