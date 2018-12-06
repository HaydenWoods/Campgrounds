import React, { Component } from 'react';

import "../styles/index.css";

class Campsite extends Component {
	render() {
		return(
			<div className="campsite">
				<div className="top">
					<img src="https://picsum.photos/1200/1200" alt="" />
				</div>
				<div className="bottom">
					<h1>{ this.props.camp.name }</h1>
				</div>
			</div>
		);
	}
}

export default Campsite