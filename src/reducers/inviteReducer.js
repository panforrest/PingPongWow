import constants from '../constants'

var initialState = {
	all: [
	    {id:1, key:'1', date:'Sat, May 26, 2018', defaultAnimation:2, label:'Match 1', position:{lat:40.7224017, lng:-73.9896719}},
        {id:2, key:'2', date:'Sun, May 27, 2018', defaultAnimation:2, label:'Ping Pong 2', position:{lat:40.7124017, lng:-73.9896719}},
        {id:3, key:'3', date:'Sat, May 26, 2018', defaultAnimation:2, label:'Match 3', position:{lat:40.7174017, lng:-73.9896719}},
        {id:4, key:'4', date:'Sun, May 27, 2018', defaultAnimation:2, label:'Ping Pong 4', position:{lat:40.7274017, lng:-73.9896719}}
	]

}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {
		default:
			return state
	}
}