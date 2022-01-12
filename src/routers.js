/**
 * @ Author: ManonIcu
 * @ Create Time: 2021/6/2 15:44
 * @ Modified by: ManonIcu
 * @ Modified time: 2021/6/2 15:44
 * @ Description:
 */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Compress from "./Compress"

export default function Routers(){
	return(
		<Router>
			<Route path="/compress" render={Compress}/>
		</Router>
	)
}