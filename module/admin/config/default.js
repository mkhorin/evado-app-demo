/**
 * @copyright Copyright (c) 2023 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const parent = require('evado-module-admin/config/default');

module.exports = {

    ...parent,

    classes: {
        ...parent.classes,
        ...require('./default-classes')
    }
};