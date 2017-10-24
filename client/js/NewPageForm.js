import React from 'react';
import ReactDOM from 'react-dom';
import { SketchPicker } from 'react-color';

class NewPageForm extends React.Component {

	constructor(props){

		super(props);
		this.state = {
			show: props.show,
			hideBreadcrumbs : props.hideBreadcrumbs,
			showPicker : false
		}

		this.uploadImage = this.uploadImage.bind(this);
		this.uploadImageonFileInputChange = this.onFileInputChange.bind(this);
		this.handleColourComplete = this.handleColourComplete.bind(this);
		this.togglePicker = this.togglePicker.bind(this);



	}

	componentWillReceiveProps(nextProps) {
		this.setState({ show: nextProps.show });  
	}

	uploadImage(id) {
		let input = document.querySelector(`input#${id}`);
		input.click();
	}

	togglePicker(e) {
		let showing_picker = this.state.showPicker;
		if(showing_picker) {
			this.setState({
				showPicker: false
			});
			e.target.innerHTML = "Choose Colour";
		} else {
			this.setState({
				showPicker: true
			});
			e.target.innerHTML = "Close picker";
		}
	}

	onFileInputChange(evt, outImage) {
		var tgt = evt.target || window.event.srcElement,
		files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
    	var fr = new FileReader();
    	fr.onload = function () {
    		document.getElementById(outImage).src = fr.result;
    	}
    	fr.readAsDataURL(files[0]);
    	document.getElementById(outImage).style.display = 'block';
    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
        document.getElementById(outImage).style.display = 'none';
    }
}

handleColourComplete(colour) {
	document.getElementById('color-input').value = colour.hex;
}

render() {
	return (
		<div className={
			this.state.show
			? "new_page_form"
			: "new_page_form hidden"
		}>
		<div className={
			this.state.hideBreadcrumbs
			? "breadcrumbs hidden"
			: "breadcrumbs"
		}>
		<span onClick={(e) => {this.props.showDashboardAction(e);}}>Pages</span> &gt; Create a page
		</div>
		<form>
		<h5>Details</h5>
		<p>Please provide us with the following information to get started</p>
		<input type="text" placeholder="Page Name" />
		<input type="text" placeholder="Internal page name" />
		<textarea placeholder="Description"></textarea>
		<h5>Background Colour</h5>
		<p>Your colour will be shown when your page is loading or if you choose not to add a background image.
		Enter a hex code. or use the colour picker.</p>
		<a className="btn inverse drop"  onClick={(e)=> {this.togglePicker(e)}}>Choose Colour</a>
		<div className={
			this.state.showPicker
			? "colour_picker_container"
			: "colour_picker_container hidden"}>
			<SketchPicker onChangeComplete={ this.handleColourComplete } />
			</div>
			<input type="text" placeholder="#ffffff" id="color-input"/>
			<h5>Upload a background image (optional)</h5>
			<p>Your background image will appear on the page. We recommend using an minimum image size of 1024px*768px. 
			We accept PNGS, JPEGS and GIFS with a max file size of 1MB</p>			
			<input type="file" id="back-image" className="hidden" onChange={(e)=>{this.onFileInputChange(e, 'back-img-el')}}/>
			<div className="image-cont">
			<img src="" id="back-img-el"/>
			</div>
			<a className="btn inverse drop" onClick={()=> {this.uploadImage('back-image')}}>Choose</a>
			<h5>Upload a logo (optional)</h5>
			<p>Your logo will be shown in your page and also in the receipts generated. Max 200KB file size. PNG only.</p>
			<input type="file" id="logo" className="hidden" onChange={(e)=>{this.onFileInputChange(e, 'logo-img-el')}}/>
			<div className="image-cont">
			<img src="" id="logo-img-el"/>
			</div>
			<a className="btn inverse drop"  onClick={()=> {this.uploadImage('logo')}}>Choose</a>
			<br/><br/>
			<a className="btn inverse" onClick={(e) => {this.props.showDashboardAction(e);}}>Cancel</a>
			<a className="btn" onClick={(e) => {this.props.showEditFormAction(e);}}>Create</a>
			<div className="clear"></div>
			</form>
			</div>
			);
}
}

export {NewPageForm as default};