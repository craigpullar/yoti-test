import React from 'react';
import ReactDOM from 'react-dom';


class DataOption extends React.Component {

	constructor(props){

		super(props);
		this.state = {
			show: props.show
		}

	}

	componentWillReceiveProps(nextProps) {
		this.setState({ show: nextProps.show });  
	}

	render() {
		return (
			<div className="data_option">
			<input type="checkbox"/><label>{this.props.label}</label>
			</div>
			);
	}
}

export {DataOption as default};