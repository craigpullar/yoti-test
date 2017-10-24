import React from 'react';
import ReactDOM from 'react-dom';

class NewPageForm extends React.Component {

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
				? "new_page_form"
				: "new_page_form hidden"
			}>
			<form>
			<h5>Details</h5>
			<p>Please provide us with the following information to get started</p>
			<input type="text" placeholder="Page Name" />
			<input type="text" placeholder="Internal page name" />
			<textarea placeholder="Description"></textarea>
			<h5>Background Colour</h5>
			<p>Your colour will be shown when your page is loading or if you choose not to add a background image.
			Enter a hex code.</p>
			<input type="text" placeholder="#ffffff"/>
			<h5>Upload a background image (optional)</h5>
			<input type="file" />
			<h5>Upload a logo (optional)</h5>
			<input type="file" />
			<a className="btn inverse" onClick={(e) => {this.props.showDashboardAction(e);}}>Cancel</a>
			<a className="btn" onClick={(e) => {this.props.showEditFormAction(e);}}>Create</a>
			<div className="clear"></div>
			</form>
			</div>
			);
	}
}

export {NewPageForm as default};