'use strict';

const parent = require('evado/config/default-utilities');

module.exports = {

    ...parent,

    'simple': {
        Class: 'component/meta/utility/SimpleUtility',
        enabled: true,
        name: 'Simple utility',
        hint: 'Set simple string value',
        confirmation: ' Execute simple utility now?',
        css: 'btn-outline-success',
        clientClass: 'Simple',
        targetClass: 'simpleData',
        actions: ['update']
    }
};