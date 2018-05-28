import React, { Component } from 'react'
import { Invite } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'
import Dropzone from 'react-dropzone'
import turbo from 'turbo360'
import { Modal } from 'react-bootstrap'

class Results extends Component {
    constructor(){
    	super()
    	this.state = {
            showModal: false,
            invite: {
                // position:{lat:40.70224017, lng:-73.9796719}
            }
    	}
    }

    componentDidMount(){
        console.log('componentDidMount: ')
        this.props.fetchInvites()
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
        // // console.log('ADD ITEM: ' + JSON.stringify(this.state.item))
        // let newInvite = Object.assign({}, this.state.invite)
        // const len = this.props.invite.all.length+1
        // newInvite['id'] = len.toString()
        // // newInvite['id'] = 100
        // // newInvite['key'] = '100'
        // // newInvite['defaultAnimation'] = 2
        // newInvite['position'] = this.props.map.currentLocation
        // this.props.addInvite(newInvite)
        if (this.props.account.currentUser == null) {
            alert('Please log in or register to send invite')
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
            site_id: '5b0983c0de0dea0014f1ad5a'
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

    onPurchase(invite, event){
        event.preventDefault()
        this.setState({
            showModal:true
        })
        console.log('onPurchase: ' + JSON.stringify(invite))
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
                    	return <Invite key={invite.id} onPurchase={this.onPurchase.bind(this, invite)} invite={invite} />
                      })

                    }
			                    
                </div>	
                <hr />
                <input onChange={this.updateInvite.bind(this, 'label')} className="formControl" type="text" placeholder="Match Invite" /><br /><br /> 
                <input onChange={this.updateInvite.bind(this, 'date')} className="formControl" type="text" placeholder="Date" /><br /><br />    
                { (this.state.invite.image == null) ? null: <img src={this.state.invite.image+'=s120-c'} />

                }
                <div>
                    <Dropzone onDrop={this.uploadImage.bind(this)} className="btn btn-info btn-fill" style={{marginRight:16}}>Add Image</Dropzone>
                    <button onClick={this.addInvite.bind(this)} className="btn btn-success">Add Invite</button> 
                </div> 
                <Modal bsSize="sm" show={this.state.showModal} onHide={ () => {this.setState({showModal:false})}}>
                    <Modal.Body style={localStyle.modal}>
                        <h2>This is a modal</h2>
                    </Modal.Body>
                </Modal>		                
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

export default connect(stateToProps, dispatchToProps)(Results)
