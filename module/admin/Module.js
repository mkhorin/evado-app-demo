'use strict';

const Base = require('evado-module-admin/Module');

module.exports = class AdminModule extends Base {

    constructor (config) {
        super({
            original: Base,
            ...config
        });
    }
};
module.exports.init(module);