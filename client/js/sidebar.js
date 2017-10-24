import React from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends React.Component {


	render() {
		return (
			<div className="sidebar">
			<ul className="nav">
			<li>
			<i className="fa fa-signal"></i>
			Activity
			</li>
			<li onClick={this.props.showDashboardAction} className="active">
			<i className="fa fa-file-o"></i>
			Pages
			</li>

			<ul className="sub-nav" >
			<li id="create-page" onClick={this.props.showFormAction}>
			Create a page
			</li>
			</ul>
			

			<li>
			<i className="fa fa-cogs"></i>
			Applications
			</li>
			</ul>
			</div>
			);
	}
}


export {Sidebar as default};