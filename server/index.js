const express = require('express'),
	  massive = require('massive'),
	  bodyPar = require('body-parser'),
	  session = require('express-session'),
	  UserCtrl = require('./Controllers/UserCtrl');
	//   AuthCtrl = require('./Controllers/AuthCtrl') ;
	  require('dotenv').config()

const app = express()
const port = 4000

massive(process.env.CONNECTION_STRING).then(db=>{
	app.set('db', db)
	console.log('db connect success!')
	})

app.use(bodyPar.json())

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))

app.use(express.static(`${__dirname}/../build`))// USE AT THE END OF YOUR DEVELOPMENT TO GET THE APP RUNNING ON ONE LOCATION!!!



// app.get('/auth/callback', AuthCtrl.auth)

// app.get('/api/currentUser', (req, res)=>{
// 	res.send(req.session.user)
// })
// app.get('api/logout', (req, res)=> {
// 	req.session.destroy()
// 	res.sendStatus(200)
// })

// app.get('/*', function(req, res) {
// 	res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
// 	  if (err) {
// 		res.status(500).send(err)
// 	  }
// 	})
//   })

app.post('/api/users', UserCtrl.createUser)
app.post('/api/user', UserCtrl.login)

app.listen(port, ()=> {
	console.log('Narwal, Narwal, swimming in the Ocean', port)
})