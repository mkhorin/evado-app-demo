/**
 * @copyright Copyright (c) 2022 Maxim Khorin (maksimovichu@gmail.com)
 */
'use strict';

const Base = require('areto/base/Base');

module.exports = class EventTracking extends Base {

    /**
     * @param {Object} data
     * @param {string} event - Listener event name
     * @param {string} originalEvent - Triggered event name
     */
    async execute (data, event, originalEvent) {
        const id = data?.model?.getId();
        this.log('info', `Listener event: ${event}. Triggered event: ${originalEvent}. Model: ${id}`)
    }

    log (type, message) {
        this.module.log(type, `${this.constructor.name}: ${message}`);
    }
};