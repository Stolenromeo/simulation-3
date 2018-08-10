import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav (props){
	if(props.location.pathname=="/"){
		console.log(props.location)
		return ( <div></div>)
	} else{
		return (
			<div> 
				<Link to='/'><button>Home</button></Link>
				<Link to='/new'><button>New Post</button></Link>
				<Link to='/'><button onClick={()=>alert("Goodbye")}> Logout </button></Link>
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