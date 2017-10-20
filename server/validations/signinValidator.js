const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');


function validateInput(data) {
    let errors={};

    if(Validator.isEmpty(data.login)){
        errors.login = 'Login is required';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password is required';
    }


    return {
        errors,
        isValid : isEmpty(errors)
    }
}
module.exports = validateInput;