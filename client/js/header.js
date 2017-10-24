import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

	render() {
		return (
			<div className="Header">
			<header>
			<img src="images/yoti.png" className="logo" />
			<img src="images/profile.jpg" className="profile" />
			<a href="" className="connected">
			Connected
			<i className="fa fa-connectdevelop" ></i>
			</a>

			</header>
			</div>
			);
	}
}


export {Header as default};