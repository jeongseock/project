import React from "react";

export default class Zodiac extends React.Component {
	constructor(){
		super();
		this.state = {sign: 'Zodiac', month: 0, day: 0};

	}
	handleSubmit(e){
		if(this.state.month < 1 || this.state.month > 12 || this.state.day < 1 || this.state.day > 31){
			this.setState({sign : 'invalid'});
		}else if(this.state.month == 1){
			if(this.state.day < 20){
				this.setState({sign : 'Capricorn'});
			}else{
			this.setState({sign : 'Aquarius'});	
			}
		}else if(this.state.month == 2){
			if(this.state.day < 19){
				this.setState({sign : 'Aquarius'});
			}else{
			this.setState({sign : 'Pisces'});	
			}
		}else if(this.state.month == 3){
			if(this.state.day < 21){
				this.setState({sign : 'Pisces'});
			}else{
			this.setState({sign : 'Aries'});	
			}
		}else if(this.state.month == 4){
			if(this.state.day <20){
				this.setState({sign : 'Aries'});
			}else{
			this.setState({sign : 'Taurus'});	
			}
		}else if(this.state.month == 5){
			if(this.state.day <21){
				this.setState({sign : 'Taurus'});
			}else{
			this.setState({sign : 'Gemini'});	
			}
		}else if(this.state.month == 6){
			if(this.state.day <21){
				this.setState({sign : 'Gemini'});
			}else{
			this.setState({sign : 'Cancer'});	
			}
		}else if(this.state.month == 7){
			if(this.state.day <23){
				this.setState({sign : 'Cancer'});
			}else{
			this.setState({sign : 'Leo'});	
			}
		}else if(this.state.month == 8){
			if(this.state.day <23){
				this.setState({sign : 'Leo'});
			}else{
			this.setState({sign : 'Virgo'});	
			}
		}else if(this.state.month == 9){
			if(this.state.day <23){
				this.setState({sign : 'Virgo'});
			}else{
			this.setState({sign : 'Libra'});	
			}
		}else if(this.state.month == 10){
			if(this.state.day <23){
				this.setState({sign : 'Libra'});
			}else{
			this.setState({sign : 'Scorpio'});	
			}
		}else if(this.state.month == 11){
			if(this.state.day <22){
				this.setState({sign : 'Scorpio'});
			}else{
			this.setState({sign : 'Sagittarius'});	
			}
		}else if(this.state.month == 12){
			if(this.state.day <22){
				this.setState({sign : 'Sagittarius'});
			}else{
			this.setState({sign : 'Capricorn'});	
			}
		}

	}
	handleChMon(e){
		this.setState({month: e.target.value});

	}
	handleChDay(e){
		this.setState({day: e.target.value});
	}	

	render() {
		return(
			<form onSubmit = {this.handleSubmit.bind(this)}>
			<input type = "number" onChange = {this.handleChMon.bind(this)}/>

			<input type = "number" onChange = {this.handleChDay.bind(this)}/>

			<input type="submit" value="submit"/>

			<h1>{this.state.sign}</h1>

			</form>
			);
	}
}