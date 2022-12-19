// Actual database
let fs = require("fs")

let DatabasePath = ".//Database.json"
let DatabaseStringModifier = "utf8"

let isOpen = false
let QueueKey
let QueueValue

async function GetDataExternal(){
	try {
		let jsonString = fs.readFileSync(DatabasePath,DatabaseStringModifier)
		let Data = JSON.parse(jsonString)
		return Data
	} catch (error) {
		console.error(error)
	}
}

function AddToQueue(Key,Value){
	QueueKey = Key
	QueueValue = Value
}

async function handleQueue(){
	if (QueueKey){
		module.exports.SetValue(QueueKey,QueueValue,true)
		QueueKey = null
		QueueValue = null
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
	
	async SetValue(Key,Value,Recursive){
		
		if(isOpen){
			if (!Recursive){
				AddToQueue(Key,Value)
			}
			return
		}
		
		let Data = await GetDataExternal()
		
		if (Data) {
			Data[Key] = Value
			let jsonString = JSON.stringify(Data)
			
			isOpen =  true
			
			await fs.writeFile(DatabasePath, jsonString, err => {
				if (err) {
					return false
				} else {
					return true
				}
			})
						
			isOpen = false
			handleQueue()
			
		}
	}
	
}
