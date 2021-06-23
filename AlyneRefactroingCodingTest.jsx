






// original function  
// this a FAT function that can get  user by id  or save record or log information 
//we should split the function to 3 function with Single responsibility
// the return TYPE should the same from one function ( not depend on the input )
// the naming of the function should clarify what it did
// PLEASE CHECK THE SRC DIRECTORY
const work = obj => {
  if (obj.type === 'user') {
    return userClient.get(`/users/${obj.id}`);
  } else if (obj.type === 'record') {
    return recordClient.post('/url/to/another/service/records', obj);
  } else if (obj.type === 'log') {
    if (obj.allowWrite) {
      localStorage.write(obj);
      remoteStorage.write(obj);
    } else {
      console.log(obj);
    }
  }
};


// refactored functions 


// Not good  Code check the src folder for better version 

const workRef = obj => {
  const isNotValid = checkValue(obj)
 if (isNotValid) return // exit function
  const type = obj.type 
  if(!type) return // exit if type not defined or null 
  if (type === 'user') return userClient.get(`/users/${obj.id}`);
  if (type === 'record') return recordClient.post('/url/to/another/service/records', obj);
  if (type === 'log')  return logger(obj);

};




// check the input value is valid  
function  checkValue(data){



  // return true if the input is  not valid and  false if the input valid 
      return data === undefined || data === null || typeof data !== 'object' 
  }



// log function will be called in the workRef Function 
  const logger = obj =>{

    if (obj.allowWrite) {
      localStorage.write(obj);
      remoteStorage.write(obj);
    } else {
      console.log(obj);
    }



  }








