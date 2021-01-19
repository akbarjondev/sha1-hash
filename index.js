const sha1 = require('sha1')
const fs = require('fs')
const path = require('path')
const util = require('util')

const [,, ...input] = process.argv
const [username, password] = input

const sourcePath = path.resolve('./database/database.json')
const read = util.promisify(fs.readFile)

;(async () => {

	const rawData = await read(sourcePath, 'utf8')
	const jsonData = JSON.parse(rawData)

	if(jsonData[username]) {
		let pass = jsonData[username].password

		if(password === undefined) {
			console.log('PLease input password')
			process.exit(5)
		}

		if(sha1(password) === pass) {
			console.log('logged in')
		} else {
			console.log('password incorrect')
		}
	}

})()
