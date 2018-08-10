import React from 'react'
import { Link } from 'react-router-dom'

function Nav (props){
	return (
		
		<div> 
			<Link to='/'><button>Home</button></Link>
			<Link to='/new'><button>New Post</button></Link>
			<Link to='/'><button onClick={()=>alert("Goodbye")}>Logout</button></Link>
		</div>
	)
}

export default Nav