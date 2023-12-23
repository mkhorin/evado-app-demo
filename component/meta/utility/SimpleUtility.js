/**
 * @copyright Copyright (c) 2022 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('evado/component/utility/MetaUtility');

module.exports = class SimpleUtility extends Base {

    async execute () {
        const data = await this.resolveMetaParams();
        const {model} = data;
        model.set('string', 'Simple utility value');
        await model.save();
        this.controller.sendText('Simple utility has set a string value');
    }
};