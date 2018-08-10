const axios = require('axios')

module.exports = {
	auth: async (req, res) =>{
	try {
			let { code } = req.query;
			let payload = {
				client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
				client_secret: process.env.AUTH0_CLIENT_SECRET,
				code,
				grant_type: "authorization_code",
				redirect_uri: `http://${req.headers.host}/auth/callback`
			}

			let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`

			let accessTokenResp = await axios.post(`${auth0domain}/oauth/token`, payload)
			let accessToken = accessTokenResp.data.access_token;

			let userInfoResponse = await axios.get(`${auth0domain}/userinfo?access_token=${accessToken}`)
			let userInfo = userInfoResponse.data;
			let db = req.app.get('db')

			let users = await db.findUserByAuthid(userInfo.sub)

			if (users.length){
				req.session.user= users[0]
				res.redirect('/')
			} else {
				let users = await db.createUser(userInfo)
				req.session.user=users[0]
				res.redirect('/')
			}
			
		} catch (error ) {
			console.log('we have a problem:', error)
			res.redirect('/error')
		}

	}
}