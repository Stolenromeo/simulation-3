const initialState = {
	username: '',
	id: 0,
	profile_pic:''
}

const SET_USER='SET_USER'

export default function reducer (state=initialState, action){
	switch (action.type) {
		case SET_USER:
		return Object.assign(state, action.payload);
	
		default:
			return state;
	}
}

export function setUser(id, un, pic) {
	return {
		type: SET_USER,
		payload: {
			username: un,
			id: id,
			profile_pic: pic
		}
	}
}