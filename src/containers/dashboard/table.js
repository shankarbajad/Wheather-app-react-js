import React from 'react'
export default class ResultTable extends React.Component{
	decideWheatherIcon(wheatherType){
		var Wtype = ''
		var isWnotExist = false
		
		switch(wheatherType){
			case 'Clear':
				Wtype =  require('../../images/clear.png')
			break

			case 'Clouds':
				Wtype =  require('../../images/cloud.png')
			break

			case 'Rain':
				Wtype =  require('../../images/rain.png')
			break

			default: 
			isWnotExist = true
			Wtype = wheatherType
		}

		if(isWnotExist){
			return(
				<div>
					{wheatherType}
				</div>
			)
		}else{
			return(
				<img src={Wtype} />
			)
		}
	}

	render(){
	return(
		<div style={{marginTop: 50}}>
			{
				this.props.wheatherInfo.length > 0 ? 
					<table class="table table-hover">
					  <thead class="thead-dark">
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Date</th>
					      <th scope="col">Wheather</th>
					      <th scope="col">Min</th>
					      <th scope="col">Max</th>
					      <th scope="col">Humidity</th>
					    </tr>
					  </thead>
						{
							this.props.wheatherInfo.map((info,index)=>{
							return(
									  <tbody>
									    <tr>
									      <th scope="row">{index}</th>
									      <td>{info.dt_txt}</td>
									      <td>{ this.decideWheatherIcon(info.weather[0].main) }</td>
									      <td>{ parseFloat(info.main.temp_min -273.15).toFixed(2) }°C</td>
									      <td>{ parseFloat(info.main.temp_max - 273.15).toFixed(2)}°C</td>
									      <td>{ info.main.humidity }%</td>
									    </tr>
									  </tbody>
							)
						})
					}
				</table>
				:null
			}
	</div>
	)	
	}
}