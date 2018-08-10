const initialState = {
	username: '',
	id: 0,
	profile_pic:''
}

const SET_USER='SET_USER'
// const FULFILLED='FULFILLED'

export default function reducer (state=initialState, action){
	switch (action.type) {
		case SET_USER:
		console.log(action.payload, 'action.payload')
		return Object.assign(state, action.payload);
	
		default:
			console.log('state', state)
			return state;
	}
}

export function setUser(user) {

	return {
		type: SET_USER,
		payload: {
			username: user.username,
			id: user.id,
			profile_pic: user.profile_pic
		}
	}
}