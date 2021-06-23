

/**
 * 
 *
 * @param {String} type required 
 * @param {Object}  data required 
 */


 function  checkValueIsValid(data,type){



// return true if the input is not  valid and  false if the input valid 
    return data === undefined || data === null || typeof data !== 'object' || data.type !== type
}


module.exports = checkValueIsValid