// Actual database
let fs = require("fs")

let DatabasePath = ".//Database.json"
let DatabaseStringModifier = "utf8"

async function GetDataExternal(){
	try {
		let jsonString = fs.readFileSync(DatabasePath,DatabaseStringModifier)
		let Data = JSON.parse(jsonString)
		return Data
	} catch (error) {
		console.error(error)
	}
}

module.exports = {
	
	async GetData(){
		return await GetDataExternal()
	},
	
	async GetValue(Key){
		let Data = await GetDataExternal()
		
		if (Data) {
			return Data[Key]
		}
	},
	
	async SetValue(Key,Value){
		let Data = await GetDataExternal()
		
		if (Data) {
			Data[Key] = Value
			let jsonString = JSON.stringify(Data)
			
			fs.writeFile(DatabasePath, jsonString, err => {
				if (err) {
					return false
				} else {
					return true
				}
			})
			
		}
	}
	
}
