


const checkValueIsValid = require('./checkValueIsValid')
/**
 * 
 *
 * @param {String} type required 
 * @param {Object}  userData {
 *  type: 'user,
 *  id : 'string'
 * 
 * }
 */
  // the perfect way is passing the id as input not all the object and provide the type as 'user'
  // async function because we have a network operation (GET)
  // a function that receive data as input and return the user by id if the data is valid to get user
  
  // otherwise provide early exit if the is not valid or threw err if there is network problem
 async function getUserById (userData) {
    // check if the value input is valid ( not null  defined etc ...)
   const notValidInput = checkValueIsValid (userData,'user')
   if(notValidInput) return  // guard exit the function if the input is not valid  ( early exit )
   let id = userData.id 
   if(!id) return // if the id is not exist exit the function (early exit )

// network operation 
     try {
       // try get the user with id we use await ( you can use .then and .catch )
       return await userClient.get(`/users/${id}`)
     } catch ( err) {
       
         console.log(err)
   // in case of error in this block how we handel the error by  ( show alert(front) or send 500 code ( backend) ) 
     throw new Error(` can't get user with id : ${id}`);
     }
   
     
   }

// export the function to use it in the main function 
   module.exports = getUserById