/**
 * @copyright Copyright (c) 2023 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('evado/model/auth/SignUpForm');

module.exports = class SignUpForm extends Base {

    static getConstants () {
        return {
            RULES: [ // extend class rules
                // ['phone', 'required'],
                ['phone', 'validator/UserPhoneValidator'],
                ...super.RULES
            ],
            ATTR_LABELS: {
                phone: 'Phone'
            }
        };
    }
};
module.exports.init(module);