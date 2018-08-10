module.exports= {
	createUser: (req, res) => {
		let { username, password } = req.body;
		let db = req.app.get('db')
		let user = {username, password};
		db.createUser(user).then(resp=>{
			res.status(200).send(resp)
		}).catch(err=>{console.log(err)
		res.send('No duplicate Users')
		})
	},
	login: (req, res) => {
		let { username, password} = req.body;
		let db = req.app.get('db');
		let user = { username, password};
		db.getUserInfo(user).then(resp=>{
			res.status(200).send(resp)
		}).catch(err=>{
			console.log(err,2222)
			res.send('You have not Registered')
		})
	}
}