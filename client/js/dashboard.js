import React from 'react';
import ReactDOM from 'react-dom';


class Dashboard extends React.Component {

	constructor(props){

		super(props);
		this.state = {
			show: props.show
		}

	}
	componentWillReceiveProps(nextProps) {
		this.setState({ show: nextProps.show });  
	}
	render () {

		return (

			<div className={
				this.state.show
				? "dashboard"
				: "dashboard hidden"
			}>
			
			
			<h2>Pages</h2>
			<hr/>

			<div className="row">
			<div className="col-sm-9">
			<h2>Overview</h2>
			</div>
			<div className="col-sm-3">
			<a href="" className="btn right" onClick={(e) => {this.props.showFormAction(e);}}>Get Started</a>
			</div>
			</div>
			<div className="col-sm-12">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus beatae recusandae possimus perferendis, dolor obcaecati veritatis pariatur itaque molestiae enim optio in, neque, nisi fugiat ut ducimus! Odit, ipsam velit!</p>
			
			<img src="images/diagram.jpeg" className="diagram"/>

			</div>
			<div className="clear"></div>
			</div>
			);

	}

}

export {Dashboard as default};