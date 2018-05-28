import constants from '../constants'

var initialState = {
	// all: [
	//     {id:'1', date:'Sat, May 26, 2018', label:'Match 1', image: 'https://hoodrhetoric.com/wp-content/uploads/2016/08/Air-Jordan-1-Retro-High-OG-Banned-Black-White-555088-001.jpg', position:{lat:40.7224017, lng:-73.9896719}, host:{username:'lebron_james',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
 //      {id:'2', date:'Sun, May 27, 2018', label:'Ping Pong 2', image: 'https://smhttp-ssl-18667.nexcesscdn.net/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/s/i/sig-7970018-sofa-chise-3.jpg', position:{lat:40.7124017, lng:-73.9996719}, host:{username:'eli_manning',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
 //      {id:'3', date:'Sat, May 26, 2018', label:'Match 3', image: 'https://d2uk7vc0yceq94.cloudfront.net/uploads/2017/08/25/s/0/1/12707801/PV2H-5.jpeg', position:{lat:40.7174017, lng:-73.9896719}, host:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
 //      {id:'4', date:'Sun, May 27, 2018', label:'Ping Pong 4', image: 'https://d2uk7vc0yceq94.cloudfront.net/uploads/2017/08/25/s/0/1/12707801/PV2H-5.jpeg', position:{lat:40.7274017, lng:-73.9896719}, host:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}}
	// ]
    all: null
}

export default (state = initialState, action) => {
	let updatedState = Object.assign({}, state)

	switch (action.type) {
        case constants.INVITE_ADDED:
          const payload = action.data
          console.log('INVITE_ADDED: '+JSON.stringify(action.data))
          let all = (updatedState.all) ? Object.assign([], updatedState.all) : []
          all.push(payload.data)
          updatedState['all'] = all
          return updatedState

		default:
			return updatedState
	}
}