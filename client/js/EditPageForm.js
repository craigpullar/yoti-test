import React from 'react';
import ReactDOM from 'react-dom';
import NewPageForm from "./NewPageForm";
import DataTab from "./dataTab";

class EditPageForm extends React.Component {

	constructor(props){

		super(props);
		this.state = {
			show: props.show
		}

		this.switchTab = this.switchTab.bind(this);

	}

	componentWillReceiveProps(nextProps) {
		this.setState({ show: nextProps.show });  
	}

	switchTab(active, e) {
		let tabs = document.querySelectorAll('.tab');
		[].forEach.call(tabs, function(el) {

			el.classList.remove('active');
		});
		let show_tab = document.querySelector(`.tab.${active}`);
		show_tab.classList.add('active');

		let tab_titles = document.querySelectorAll('.tabs li');
		[].forEach.call(tab_titles, function(el) {

			el.classList.remove('active');
		});
		e.target.classList.add('active');

	}

	render() {
		return (
			<div className={
				this.state.show
				? "edit_page_form"
				: "edit_page_form hidden"
			}>
			<h2>Page Name</h2>
			<ul className="tabs">
			<li onClick={(e) => {this.switchTab('details',e)}} className="active">Details</li>
			<li onClick={(e) => {this.switchTab('data',e )}} className="">Data</li>
			</ul>
			<div className="tab details active">
			<NewPageForm show={true} showDashboardAction={this.props.showDashboard}/>
			</div>
			<div className="tab data">
			<DataTab show={true} />
			</div>
			</div>
			);
	}
}

export {EditPageForm as default};