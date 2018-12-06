import React, { Component } from 'react';

import Campsite from "./campsite.js";

import "../styles/index.css";

class CampsList extends Component {
	render() {
		return(
			<div className="campslist">
				<div className="restrict">
					{this.props.camps.map(
						camp => <Campsite key={camp.id} camp={camp}/>
					)}
					<div className="clearfix"></div>
				</div>
			</div>
		);
	}
}

export default CampsList;