

const checkValueIsValid = require('./checkValueIsValid')


/**
 * 
 *
 * @param {String}  type required 
 * @param {Object}  record {
 *  type : 'record', 
 * 
 * 
 * }
 */


// async function because we have a network operation (POST)
 
async function saveRecord(record)  {
    // check if the value input is valid ( not null  defined etc ...)
    const notValidInput = checkValueIsValid (record,'record')
  
     
    if(notValidInput) return // guard exit the function in case the input is not valid 
  
            // Network operation must use  await  ( we can use promise .then and .catch )
    
            try {
                return  await recordClient.post('/url/to/another/service/records', record)
    
            } catch(err){
             // in case of error in this block how we handel that error ( show alert(front) or send 500 code ( backend) ) 
                throw new Error(`can't save new  record ${record}` )
    
            }
             
            }

            
   module.exports = saveRecord