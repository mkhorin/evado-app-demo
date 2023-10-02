'use strict';

const parent = require('evado/config/default-classes');

module.exports = {

    ...parent,

    'model/auth/SignUpForm': require('../model/auth/SignUpForm'),
    'model/User': require('../model/User'),

    'validator/UserPhoneValidator': require('../component/validator/UserPhoneValidator'),
};