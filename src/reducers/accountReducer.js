import constants from '../constants'

var initialState = {
	// all: null,
	currentUser: null // signed in user
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type) {

		case constants.CURRENT_USER_RECEIVED:
		    console.log('CURRENT_USER_RECEIVED: '+JSON.stringify(action.data))
			updated['currentUser'] = action.data.user
			return updated

		// case constants.USERS_RECEIVED:
		// 	newState['all'] = action.data
		// 	return newState

		// case constants.USER_CREATED:
		// 	let array = (newState.all) ? Object.assign([], newState.all) : []
		// 	array.unshift(action.data)
		// 	newState['all'] = array
		// 	return newState

		default:
			return state
	}
}