import React, { Component } from 'react';
import Heatmap from './components/heatmap/Heatmap';
import Nav from './components/Nav';
import Chart from './components/chart/Chart';
import About from './components/about/About';
import AdditionalResources from './components/additionalResources/AdditionalResources';

import './App.css';
import needle from './SpaceNeedle.svg';



class App extends Component {
	constructor(){
		super();
		this.state = {
		chartData:{}
		}
	}

	componentWillMount(){
		this.getChartData();
	}

	getChartData(){
		// this is where we gotta get the real data
		this.setState({
			chartData:{
				labels: ['Beacon Hill', 'Columbia City', 'Greenwood', 'Northgate', 'Rainier Valley', 'White Center'],
				datasets:[
					{
					label:'2013',
					data:[
						150,
						200,
						225,
						150,
						130,
						175
						],
					backgroundColor: 'lightgray'
					},
				{
					label:'2015',
					data:[
						200,
						300,
						205,
						100,
						220,
						205
					],
					backgroundColor: 'darkgray'            
					},
				{
					label:'2018',
					data:[
						220,
						305,
						200,
						150,
						230,
						180
					],
					backgroundColor: 'gray'            
					}
				]
			}
		});
	}

	render() {
		return (
			<div className="App">
				<Nav />
				<div className="buffer">
				<br /><br />
				</div>
				<div className="section">
					<div className="left-1" id="needle">
			            <img src={needle} alt="Seattle Space Needle" />
		            </div>
		            <div className="right-4">
						<h1>Gentrification & Displacement in Seattle</h1>
						<p><strong>&ldquo;Gentrification [is] the process of neighborhood change</strong> that results in the replacement of lower income residents with higher income ones.&rdquo;  &mdash;<em>(Kennedy and Leonard, 2001a, p. 1)</em></p>

						<p>The city of Seattle has been growing rapdily for several years. As population increases, housing costs rise. Lower-income communities and communities of color are at elevated risk for displacement.</p>
					</div>

				</div>
				<div className="section">
					<div className="left-3">
						<Heatmap />
					</div>
					<div className="right-2">
						<h2>Where gentrification is happening</h2>
						<p>Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500, quan un impressor desconegut va fer servir una galerada de text i la va mesclar per crear un llibre de mostres tipogràfiques. No només ha sobreviscut cinc segles, sinó que ha fet el salt cap a la creació de tipus de lletra electrònics, romanent essencialment sense canvis.</p>					
					</div>
				</div>
				<div className="chartContainer" className="section">
					<div className="left-2">
						<h2>Increasing relocations</h2>
						<p>Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500, quan un impressor desconegut va fer servir una galerada de text i la va mesclar per crear un llibre de mostres tipogràfiques. No només ha sobreviscut cinc segles, sinó que ha fet el salt cap a la creació de tipus de lletra electrònics, romanent essencialment sense canvis.</p>					

					</div>
					<div className="right-3">
						<Chart chartData={this.state.chartData} location="Seattle" legendPosition="bottom"/>
					</div>
				</div>
				<div className="section">
					<div className="left-3">
						<AdditionalResources />
					</div>
				</div>
				<div className="section" >
					<div className="right-3">
						<About />
					</div>	
				</div>
	        </div>
		);
	}
}


export default App;
