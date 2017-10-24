import React from 'react';
import ReactDOM from 'react-dom';
import DataOption from "./dataOption";


class DataTab extends React.Component {

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
			<div className={
				this.state.show
				? "details_tab"
				: "details_tab hidden"
			}>
			<h5>Data Options</h5>
			<p>What information do you wish to gather of users?</p>
			<p>There is no charge but we recommend that you only ask exactly what you need.</p>
			<div className="options_area">
			<DataOption label="Photo" />
			<DataOption label="Given Name(s)" />
			<DataOption label="Family Name" />
			<DataOption label="Mobile Number" />
			<DataOption label="Email address" />
			<DataOption label="Date of Birth" />
			<DataOption label="Address" />
			<DataOption label="Gender" />
			<DataOption label="Nationality" />
			<DataOption label="Photo Verification" />
			</div>
			<br/>
			<a className="btn inverse">Cancel</a>
			<a className="btn">Save</a>
			
			</div>
			);
	}
}

export {DataTab as default};