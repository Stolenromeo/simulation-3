import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUser } from '../ducks/reducer'

class Auth extends Component {
	constructor(props){
		super(props)

		this.state={
			username: '',
			password: '',
			toDashboard: false,
		}


		this.unChange=this.unChange.bind(this) 
		this.pwChange=this.pwChange.bind(this)  
		this.login = this.login.bind(this)
	}

	unChange(e){this.setState({username: e.target.value})}
	pwChange(e){this.setState({password: e.target.value})}

	login(){
		let { username, password } = this.state
		let user = {username, password};

		  axios.post('/api/user', {user}).then(res=>{
				let user = {}
			  if(res.data[0]){
					this.props.history.push('/dashboard')
					user = res.data[0]
			  } else {
					alert('username and password do not match')
			  }
				setUser(user)
			})
		}

		loginWithAuth=()=>{
		let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
		let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
		let scope = encodeURIComponent("openid profile email")
		let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
	
		let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
	
		window.location = location
		}

	  register=()=>{
		  let { username, password } = this.state
			let user = {username, password};
			axios.post('/api/users', {user}).then(res=>{
			if(!!username && !!password){
			  if(res.data[0]){
					this.props.history.push('/dashboard')
				} else {
					alert('That username is already taken')
				}
			}
		})
	  }

	render(){

		return (
			<div>
				<input type='text' placeholder='username' value={this.state.username} onChange={this.unChange}/>
				<input type='text' placeholder='password' value={this.state.password} onChange={this.pwChange}/>
				<button onClick={this.login}>Login</button>
				<button onClick={this.register}>Register</button>
				<button onClick={this.loginWithAuth}>Log in with Auth0</button>
			</div>
		)
	}
}

export default connect(null,setUser)(Auth)