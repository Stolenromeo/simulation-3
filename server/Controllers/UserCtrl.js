module.exports= {
	createUser: (req, res) => {
		let db = req.app.get('db')
		let { username, password } = req.body;
		let user = {username, password};
		db.createUser(user).then(resp=>{
			res.status(200).send(resp)
		})
	},
	login: async (req, res) => {
		let { username, password} = req.body.user;
		let db = req.app.get('db');
		if(username && password){
			db.getUserInfo({username, password}).then(resp=>{ 
				if(resp){
				res.status(200).send(resp)
				} else {
					res.sendStatus(200)
				}
			}).catch(err=>console.log('error getting user', err))
		}
	}
}