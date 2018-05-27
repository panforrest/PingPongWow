import React, { Component } from 'react'
import { Map } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Search extends Component {

	constructor(){
		super()
		this.state = {
			map: null,
			center: null
		}
	}

	centerChanged(center){
		console.log('centerChanged: '+JSON.stringify(center))
		this.props.locationChanged(center)
	}

    render(){
    	// const markers = [
     //        {id:1,key:'1', defaultAnimation:2,label:"Nike Jordan", position:{lat:40.7224017, lng:-73.9896719}},
     //        {id:2,key:'2', defaultAnimation:2,label:"Nike Jordan", position:{lat:40.7024017, lng:-73.9896719}}
     //    ] 
        const invites = this.props.invite.all || []


        let markers = []
        invites.forEach((invite, i) => {
            const marker = {
                key: invite.id,
                label: invite.name,
                position: invite.position,
                defaultAnimation: 2
            }

            markers.push(marker)
        })

    	return(

            <div>
			    
			    <Map 
				    onMapReady={ (map) => {
				        if (this.state.map != null)
				            return

				        console.log('OnMapReady: '+JSON.stringify(map.getCenter()))
				        this.setState({
				            map: map
				        })
				    }}

                    locationChanged={this.centerChanged.bind(this)}
                    markers={markers}
				    zoom={12}
				    center={{lat:40.7224017, lng:-73.9896719}}
				    containerElement={<div style={{height:100+'%'}} />} 
				    mapElement={<div style={{height:100+'vh'}} />} />

			</div> 

    	)
    }

}

const stateToProps = (state) => {
	return {
		invite: state.invite
	}
}

const dispatchToProps = (dispatch) => {
	return {
        locationChanged: (location) => dispatch(actions.locationChanged(location))
	}
}

export default connect(stateToProps, dispatchToProps)(Search)