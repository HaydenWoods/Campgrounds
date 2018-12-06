import React, { Component } from 'react';

import "../styles/index.css";

class Header extends Component {
	render() {
		return(
			<div id="header">
				<div className="restrict">
					<div id="nav-bar">
						<ul>
							<a href="">
								<li>Home</li>
							</a>
							<a href="">
								<li>Contact</li>
							</a>
							<a href="">
								<li>About</li>
							</a>
							<a href="">
								<li>Listings</li>
							</a>
						</ul>

						<div id="account">
							<div id="login-signup">
								<div className="button login">Login</div>
								<div className="button signup">Sign Up</div>
							</div>
						</div>

						<div id="search">
							<input type="text" name="search" placeholder="Search..." className="search" autocomplete="off"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;