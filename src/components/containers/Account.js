import React, { Component } from 'react'
import { Register } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Input } from '../containers'

class Account extends Component {

    // componentDidMount(){
    //     this.props.checkCurrentUser()
    // }

    register(registration){
        this.props.signup(registration)
    }

    login(credentials){
        this.props.login(credentials)
    }

    render(){
        const currentUser = this.props.account.currentUser

        return (
            <div>
                
                { (currentUser == null) ? <Register onRegister={this.register.bind(this)} onLogin={this.login.bind(this)} /> : 
                  <div>  
                    <h2>Welcome!</h2>
                    <h2>{currentUser.username}</h2> 
                    <Input />
                  </div>
                }

            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        account: state.account
    }
}

const dispatchToProps = (dispatch) => {
    return {
        signup: (params) => dispatch(actions.signup(params)),
        login: (params) => dispatch(actions.login(params)),
        // checkCurrentUser: () => dispatch(actions.checkCurrentUser())
    }
}


export default connect(stateToProps, dispatchToProps)(Account)


