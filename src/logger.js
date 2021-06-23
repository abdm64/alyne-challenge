
const checkValueIsValid = require('./checkValueIsValid')


/**
 * 
 *
 * @param {Object}  logObj required 
 */
 // a function thar receive data as input and log the message if the input is valid
  // otherwise provide early exit if the is not valid 
 function logMessage(logObj){
  const notValidInput = checkValueIsValid (logObj,'log') // check the value is valid 
  
  if(notValidInput) return // provide early exit 
  // do the job 

    if (logObj.allowWrite) {
        localStorage.write(logObj);
        remoteStorage.write(logObj);
      } else {
        console.log(logObj);
      }


}

module.exports = logMessage








