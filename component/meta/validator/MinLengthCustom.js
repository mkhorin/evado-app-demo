/**
 * @copyright Copyright (c) 2022 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('evado/component/validator/CustomValidator');

module.exports = class MinLengthCustomValidator extends Base {

    constructor (config) {
        super({
            skipOnAnyError: true,
            ...config
        });
    }

    async validateAttr (name, model) {
        const string = model.get('string');
        const email = model.get('email');
        const min = (string?.length || 0) + (email?.length || 0);
        const value = model.get(name);
        if (value.length < min) {
            return model.addError(name, this.getMessage(min));
        }
    }

    getMessage (min) {
        const defaults = 'Value should contain at least {min} chr. (sum String and Email lengths)';
        return this.createClientMessage(this.message, defaults, {min});
    }
};