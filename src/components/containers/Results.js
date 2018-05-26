import React, { Component } from 'react'
import { Invite } from '../presentation'

class Results extends Component {
    constructor(){
    	super()
    	this.state = {

    	}
    }
    
    render(){

        const invites = [
            {id:1, key:'1', date:'Sat, May 26, 2018', defaultAnimation:2, label:'Match 1', position:{lat:40.7224017, lng:-73.9896719}},
            {id:2, key:'2', date:'Sun, May 27, 2018', defaultAnimation:2, label:'Ping Pong 2', position:{lat:40.7124017, lng:-73.9896719}}
        ]

    	return(
            <div className="container-fluid">
                <div className="row">

                    { invites.map((invite, i) => {
                    	return <Invite key={invite.id} invite={invite} />
                      })

                    }
			                    
                </div>			                
            </div>
    	)
    }
}

export default Results
