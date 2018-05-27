import React, { Component } from 'react'
import { Invite } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Results extends Component {
    constructor(){
    	super()
    	this.state = {
            invite: {
                position:{lat:40.70224017, lng:-73.9796719}
            }
    	}
    }

        updateInvite(attr, event){
        event.preventDefault()
        console.log(attr + ' == ' + event.target.value)
        let updated = Object.assign({}, this.state.invite)
        updated[attr] = event.target.value
        this.setState({
            invite: updated
        })
    }

    addInvite(){
        // console.log('ADD ITEM: ' + JSON.stringify(this.state.item))
        let newInvite = Object.assign({}, this.state.invite)
        newInvite['id'] = 100
        newInvite['key'] = '100'
        newInvite['defaultAnimation'] = 2
        this.props.addInvite(newInvite)
    }
    
    render(){

        // const invites = [
        //     {id:1, key:'1', date:'Sat, May 26, 2018', defaultAnimation:2, label:'Match 1', position:{lat:40.7224017, lng:-73.9896719}},
        //     {id:2, key:'2', date:'Sun, May 27, 2018', defaultAnimation:2, label:'Ping Pong 2', position:{lat:40.7124017, lng:-73.9896719}}
        // ]
        const invites = this.props.invite.all || []

    	return(
            <div className="container-fluid">
                <div className="row">

                    { invites.map((invite, i) => {
                    	return <Invite key={invite.id} invite={invite} />
                      })

                    }
			                    
                </div>	
                <hr />
                <input onChange={this.updateInvite.bind(this, 'label')} className="formControl" type="text" placeholder="Invite" /><br /><br /> 
                <input onChange={this.updateInvite.bind(this, 'date')} className="formControl" type="text" placeholder="Date" /><br /><br />    
                
                <div>
                    <button onClick={this.addInvite.bind(this)} className="btn btn-success">Add Invite</button> 
                </div>  		                
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
        addInvite: (invite) => dispatch(actions.addInvite(invite))
    }
}

export default connect(stateToProps, dispatchToProps)(Results)
