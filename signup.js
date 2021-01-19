const sha1 = require('sha1')
const fs = require('fs')
const path = require('path')
const util = require('util')

const [,, ...input] = process.argv
const [username, password] = input

const sourcePath = path.resolve('./database/database.json')
const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)

;(async () => {

	const rawData = await read(sourcePath, 'utf8')
	const jsonData = JSON.parse(rawData)

	// if(Object.keys(jsonData).length > 0) {
		jsonData[username] = {password: sha1(password)}

		await write(sourcePath, JSON.stringify(jsonData, null, 2))
		console.log('ok')
	// }

})()
