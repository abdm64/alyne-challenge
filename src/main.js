
const getUserById = require('./getUser')
const saveRecord = require('./saveRecord')
const logMessage = require('./logger')



const userData = {
    type:"user", 
    id:3
}
const recordData = {
    type : "record",
    
}
const log = {
    type : "log",
    data : {


    }

}




async function main(){
   let user = await getUserById(userData)
    let savedRecored = await saveRecord(recordData)
    logMessage(log)



}

// execute the main function 
main()
