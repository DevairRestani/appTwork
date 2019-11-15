import React from 'react';
import Routes from './routes'
import './css/index.css' 
import SideBar from './components/SideMenu/sidebar';

// import logo from './assets/mala.png'

function App() {
	return (
		<div className="container">
			<SideBar pageWrapId={"page-wrap"} outerContainerId={"container"} />
			<div id="page-wrap">
				<section className="content">
					<Routes />
				</section>
			</div>
		</div>
	)
}

export default App
