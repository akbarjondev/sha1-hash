class Cipher {

	#key
	#charCipher
	ciphered = []
	output = []

	constructor(key, cipher = 'Z') {
		this.#key = key
		this.#charCipher = cipher.charCodeAt(0)
	}

	makeCipher() {
		for (let i = 0; i < this.#key.length; i++) {
		  this.ciphered.push(String.fromCharCode((key.charCodeAt(i) ^ charCipher) & charCipher))
		}

		return this.ciphered
	}

	makeDecipher() {
		for (let i = 0; i < ciphered.length; i++) {
   		this.output.push(String.fromCharCode(key.charCodeAt(i)))
		}

 		return this.output
	}

}

module.exports.Cipher = Cipher