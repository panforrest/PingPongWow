import React, { Component } from 'react'
import { Map } from './presentation'
import { Search, Results, Nav } from './containers'
import { Account } from './containers'


class Home extends Component {

	constructor(){
		super()
		this.state = {
			map: null
		}
	}

    render(){
    	// const markers = [
     //        {id:1,key:'1', defaultAnimation:2,label:"Match 1", position:{lat:40.7224017, lng:-73.9896719}},
     //        {id:2,key:'2', defaultAnimation:2,label:"Ping Pong 2", position:{lat:40.7024017, lng:-73.9896719}}
     //    ] 

    	return(
    		<div className="container"> 
        	    <div className="row">
        	        <div className="col-md-4">
        	            <Search/> 
        	        </div>

        	        <div className="col-md-8">
                        <Nav />
                        <Account />
                        
        	            <Results />
        	        </div> 

                         	        

        	    </div>
        	</div>  

    	)
    }

}

export default Home 