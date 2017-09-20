// addSport.js
import React,{Component} from 'react';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import { ApolloClient, createNetworkInterface } from 'react-apollo';

import config from  '../config.js';

const networkInterface = createNetworkInterface({config});
const client = new ApolloClient({
  networkInterface: networkInterface
}); 

class addUser extends Component{
	constructor(props){
		super(props);
		this.state = {
			name:''
		};
		this.handleChange=this.handleChange.bind(this);

	}
	onChange = (e) =>{
		this.setState({
			name:e.target.value
		});
	}
	onSubmit = (e) =>{
		e.preventdefault();
		this.set
	}
	render () {
		return(
			<div>
				<form onSubmit ={this.handleSubmit}>
				<FormGroup>
		          <ControlLabel>Sport name</ControlLabel>
		          <FormControl
		            type="text"
		            value={this.state.name.value}
		            placeholder="Enter name of sport"
		            onChange={this.handleChange}
		          />
		        </FormGroup>
				</form>
			</div>
			);
	}
}