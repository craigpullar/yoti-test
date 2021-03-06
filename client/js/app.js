import * as globals from "./globals";
import ".././css/main.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import Header from "./header";
import NewPageForm from "./NewPageForm";
import EditPageForm from "./EditPageForm";


class App extends React.Component {

	constructor(props){

		super(props);
		this.state = {
			show_dashboard : true,
			show_newPageForm : false,
			show_editPageForm : false,
			formState : {
				page_name : '',
				internal_page_name :  '',
				description :  '',
				colour : '',
				back_image : '',
				logo_image :  ''

			}
		}

		this.showNewForm = this.showNewForm.bind(this);
		this.showEditForm = this.showEditForm.bind(this);

		this.showDashboard = this.showDashboard.bind(this);


	}

	showNewForm(e) {
		e.preventDefault();
		this.setState({
			show_dashboard: false,
			show_newPageForm: true,
			show_editPageForm: false
		});
		window.scrollTo(0,0);
		document.querySelector('.sidebar li#create-page').classList.add('active');
	}
	showEditForm(e,data) {
		console.log(data);
		e.preventDefault();
		this.setState({
			show_dashboard: false,
			show_newPageForm: false,
			show_editPageForm: true,
			formState: data
		});
		window.scrollTo(0,0);
		document.querySelector('.sidebar li#create-page').classList.remove('active');

	}

	showDashboard(e) {
		
		e.preventDefault();
		this.setState({
			show_dashboard: true,
			show_newPageForm: false,
			show_editPageForm: false
		});
		window.scrollTo(0,0);
		document.querySelector('.sidebar li#create-page').classList.remove('active');

	}

	render () {

		return (

			<div className="app">

			<Header />

			<Sidebar showFormAction={this.showNewForm} showDashboardAction={this.showDashboard}/>
			<div className="content-area">
			<Dashboard show={this.state.show_dashboard} showFormAction={this.showNewForm} />
			<NewPageForm show={this.state.show_newPageForm} 
			showDashboardAction={this.showDashboard} showEditFormAction={this.showEditForm} formState={this.state.formState}/>
			<EditPageForm show={this.state.show_editPageForm} showDashboardAction={this.showDashboard} formState={this.state.formState}/>
			</div>
			</div>
			);

	}

}


ReactDOM.render(<App />, document.getElementById('app'));


