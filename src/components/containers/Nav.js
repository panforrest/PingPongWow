import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {
	render(){
		// const currentUser = (this.props.user.currentUser==null) ? null: <p>Welcome, {this.props.user.currentUser}</p>
        const currentUser = this.props.user.currentUser

		return (
            <nav>
			    <span class="navbar-brand mb-0 h1">PingPongWow</span>
			    <a class="nav-tab" href="/auth/logout"> { (currentUser==null) ? null: <span>Log out</span> } </a>
			</nav>
		)
	}
}

const stateToProps = (state) => {
	return {
		user: state.account
	}
}

export default connect(stateToProps)(Nav)

