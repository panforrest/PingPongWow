import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import Dropzone from 'react-dropzone'
import turbo from 'turbo360'

class Input extends Component {
    constructor(){
    	super()
    	this.state = {
            invite: {
                // position:{lat:40.70224017, lng:-73.9796719}
            }
    	}
    }

    // componentDidMount(){
        
    //     console.log('componentDidMount: ')
    //     this.props.fetchInvites()
    // }

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
        if (this.props.account.currentUser == null) {
            alert('Please log in or register to send invites')
            return
        }

        const currentUser = this.props.account.currentUser
        let updated = Object.assign({}, this.state.invite)
        updated['position'] = this.props.map.currentLocation
        updated['host'] = {
            id: currentUser.id,
            username: currentUser.username,
            image: currentUser.image || ''
        }

        console.log('ADD INVITE: ' + JSON.stringify(updated))
        this.props.addInvite(updated)
        .then(data => {
            console.log('INVITE ADDED: ' + JSON.stringify(data))
        })
        .catch(err => {
            console.log('ERR: ' + err.message)
        })
    }

    uploadImage(files){
        const image = files[0]
        console.log('uploadImage: ' + image.name)
        const turboClient = turbo({
            site_id: '5ae5315e0d44f900146683d0'
        })

        turboClient.uploadFile(image)
        .then(data => {
            // console.log('FILE UPLOADED: ' + JSON.stringify(data))
            // console.log('FILE UPLOADED: ' + data.result.url)
            let updated = Object.assign({}, this.state.invite)
            updated['image'] = data.result.url
            this.setState({
                invite: updated
            })
        })
        .catch(err => {
            console.log('UPLOAD ERROR: ' + err.message)
        })
    }
    
    render(){

    	return(
            <div className="container-fluid">
                
                <hr />
                <input onChange={this.updateInvite.bind(this, 'label')} className="formControl" type="text" placeholder="Match Invite Detail" /><br /><br />	
                <input onChange={this.updateInvite.bind(this, 'date')} className="formControl" type="text" placeholder="Date/Time" /><br /><br />    
                { (this.state.invite.image == null) ? null: <img src={this.state.invite.image+'=s120-c'} />

                }
                <hr />

                <div>
                    <Dropzone onDrop={this.uploadImage.bind(this)} className="btn btn-info btn-fill" style={{marginRight:16}}>Add Image</Dropzone>
                    <button onClick={this.addInvite.bind(this)} className="btn btn-success">Add Invite</button>	
                </div>	                
            </div>


    	)
    }
}

const localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
}

const stateToProps = (state) => {
    return {
        invite: state.invite,
        map: state.map,
        account: state.account
    }
}

const dispatchToProps = (dispatch) => {
    return {
        addInvite: (invite) => dispatch(actions.addInvite(invite)),
        fetchInvites: (params) => dispatch(actions.fetchInvites(params))
    }
}

export default connect(stateToProps, dispatchToProps)(Input)
