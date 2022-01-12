import React,{Component} from "react"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './index.scss';
import {colors,tools} from "./config"
import Compress from "../Compress";

export default class App extends Component{
	render() {
		return (
			<Router>
				<div className="main">
					{
						tools.map((item,key)=>{
							return <div className="item" key={item.name} style={{'background-color':colors[key]}}>
								<Link to="/compress">
									<div className="item-name">
									{item.name}
								</div>
								</Link>
							</div>
						})
					}
				</div>
				<Route path="/compress" render={Compress}/>
			</Router>
		);
	}
}
