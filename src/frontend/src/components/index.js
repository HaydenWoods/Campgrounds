import React, { Component } from 'react';
import axios from "axios";

import Header from "./header.js";
import CampsList from "./campslist.js";

import "../styles/index.css";

class Index extends Component {
	state = {
		camps: [],
		isloading: true
	};
	componentDidMount() {
		axios
		.get("//localhost:3001/api/camps")
		.then(response => {
			const campsdata = response.data.map(c => { 
				let camp = {
					id: c.id,
					name: c.name
				};
				return camp
			});
			console.log(Array.isArray(campsdata), campsdata, { camps: campsdata, isloading: false })

			this.setState({ camps: campsdata, isloading: false });
		})
		.catch(error => this.setState({ error }));
	}

	render() {
		return(
			<div id="index">
				<Header/>
				<CampsList camps={ this.state.camps }/>
			</div>
		);
	}
}

export default Index;