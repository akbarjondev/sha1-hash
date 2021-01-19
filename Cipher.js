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
		  this.ciphered.push(String.fromCharCode((this.#key.charCodeAt(i) ^ this.#charCipher)))
		}

		return this.ciphered
	}

	makeDecipher() {
		for (let i = 0; i < this.ciphered.length; i++) {
   		this.output.push(String.fromCharCode(this.#key.charCodeAt(i)))
		}

 		return this.output.join('')
	}

}

module.exports.Cipher = Cipher