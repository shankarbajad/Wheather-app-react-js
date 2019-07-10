import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchWetherInformation } from '../../actions/user'

import ResultTable from './table'
class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			city: 'indore,in',
			wheatherInfo: []
		}
		this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
	}

	componentWillMount(){
		this.props.fetchWetherInformation({city: this.state.city})
	}

	componentDidMount() {
    this.autocomplete = new window.google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

	componentWillReceiveProps(nextProps){
		var res = nextProps.response.userReducer.res
		if(res){
			if(res.cod == "200"){
				this.setState({wheatherInfo: res.list})
			}
		}
	}

	fetchInfo = (city) => {
		this.props.fetchWetherInformation({city: city})
	}

	handlePlaceChanged(){
   const place = this.autocomplete.getPlace();
   if(place){
    this.setState({
      city: place.name + ',' +place.address_components[place.address_components.length - 1].short_name})
   }
  }

  render() {
    return (
     <div class="container">
     	<div style={{textAlign: 'center', fontSize: 18, fontWeight: 700, marginTop: 30}}>
     		Test Weather Forcating App
     	</div>

     	<div style={{marginTop: 50,fontSize: 16, fontWeight: 600}}>
     		Find Weather in your city 
     	</div>

     	<div className="container">
          <div className="row">
            <div className="col-sm-4">
               <div className="input-group" style={{marginTop: 30,width: '80%'}}>
                  <input 
                    type="text" 
                    className="form-control" 
                    ref={this.autocompleteInput}  
                    id="autocomplete"
                    placeholder="Search City" 
                    aria-label="Search City" 
                    aria-describedby="basic-addon1"
                    value={this.state.city}
                    onChange={(e)=>{this.setState({city: e.target.value})}}
                    />
                  <span style={{marginTop: 10, fontSize: 12}}>*use city name with country code if auto place search not working</span>
                  <span style={{fontSize: 12}}>** like (indore,in) (delhi,in)</span>
                </div>
            </div>
            <div className="col-sm">
              <div style={{marginTop: 30}}>
                 <button 
                    onClick={()=>{this.fetchInfo(this.state.city)}}
                    style={{marginLeft: 15}} 
                    type="button" 
                    className="btn btn-outline-primary">
                  Get wheather Information</button>
              </div>
            </div>
          </div>
        </div>
      	
      	<ResultTable
      		wheatherInfo = {this.state.wheatherInfo}
      	/>

     </div>
    );
  }
}


const mapStateToProps = (state) => {
  // this method handle response when reducer return anything
  return{
   'response': state
  };
}


const DashboardScreen = connect(mapStateToProps, { fetchWetherInformation })(Dashboard)
export default DashboardScreen