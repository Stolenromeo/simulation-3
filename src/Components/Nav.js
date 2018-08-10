import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav (props){
	// console.log(props.username, '1111223424')
	if(props.location.pathname==="/"){
		return ( <div></div>)
	} else{
		return (
			<div> 
				<Link to='/'><button>Home</button></Link>
				<Link to='/new'><button>New Post</button></Link>
				<Link to='/'><button onClick={()=>alert("Goodbye")}> Logout </button></Link>
				{/* {`1111111${props.username}`} */}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		username: state.username,
		profile_pic: state.profile_pic
	}
}

export default withRouter(connect(mapStateToProps)(Nav))