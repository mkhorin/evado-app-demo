/**
 * @copyright Copyright (c) 2023 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const USER_PHONE_REGEX = /^[0-9]{11}$/;

const Base = require('areto/validator/StringValidator');

module.exports = class UserPhoneValidator extends Base {

    constructor (config) {
        super({
            pattern: USER_PHONE_REGEX,
            message: 'Invalid phone number',
            ...config.module.params.userPhoneValidator,
            ...config
        });
    }
};