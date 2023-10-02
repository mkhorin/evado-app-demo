'use strict';

const Base = require('evado-module-admin/model/User');

module.exports = class User extends Base {

    static getConstants () {
        return {
            ATTRS: [
                ...super.ATTRS,
                'phone'
            ],
            RULES: [
                ...super.RULES,
                ['phone', 'validator/UserPhoneValidator']
            ]
        };
    }
};
module.exports.init(module);