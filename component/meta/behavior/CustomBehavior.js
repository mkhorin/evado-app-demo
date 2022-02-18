/**
 * @copyright Copyright (c) 2022 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('evado-meta-base/behavior/Behavior');

module.exports = class CustomBehavior extends Base {

    constructor (config) {
        super({
            stringDefaultValue: 'Default value from custom behavior',
            ...config
        });
    }

    async afterDefaultValues () {
        this.set('string', this.stringDefaultValue);
    }

    async beforeUpdate () {
        const now = (new Date).toLocaleString();
        this.set('string', `Updated at ${now} from custom behavior`);
    }
};