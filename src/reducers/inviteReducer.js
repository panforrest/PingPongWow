import constants from '../constants'

var initialState = {
	all: [
	    {id:'1', date:'Sat, May 26, 2018', label:'Match 1', position:{lat:40.7224017, lng:-73.9896719}, host:{username:'lebron_james',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
      {id:'2', date:'Sun, May 27, 2018', label:'Ping Pong 2', position:{lat:40.7124017, lng:-73.9996719}, host:{username:'eli_manning',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
      {id:'3', date:'Sat, May 26, 2018', label:'Match 3', position:{lat:40.7174017, lng:-73.9896719}, host:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
      {id:'4', date:'Sun, May 27, 2018', label:'Ping Pong 4', position:{lat:40.7274017, lng:-73.9896719}, host:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}}
	]

}

export default (state = initialState, action) => {
	let updatedState = Object.assign({}, state)

	switch (action.type) {
        case constants.INVITE_ADDED:
          console.log('ITEM_ADDED: '+JSON.stringify(action.data))
          let all = (updatedState.all) ? Object.assign([], updatedState.all) : []
          all.push(action.data)
          updatedState['all'] = all
          return updatedState

		default:
			return state
	}
}