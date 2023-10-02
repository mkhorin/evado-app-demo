'use strict';

const Base = require('evado/model/User');

module.exports = class User extends Base {

    static getConstants () {
        return {
            ATTRS: [
                ...super.ATTRS,
                'phone'
            ]
        };
    }
};
module.exports.init(module);