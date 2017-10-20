const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');


function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.login)) {
        errors.login = 'Login is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'User name is required';
    }

    if (Validator.isEmpty(data.age)) {
        errors.age = 'User age is required';
    }

    if (!Validator.isInt(data.age)) {
        errors.age = 'Please, enter a number';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}
module.exports = validateInput;