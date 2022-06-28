'use strict';

module.exports = {

    title: 'Demo',

    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'evado-demo',
            }
        },
        'cookie': {
            secret: 'demo.evado.sign'
        },
        'session': {
            secret: 'demo.evado.sign'
        },
        'i18n': {
            language: 'en'
        },
        'router': {
            defaultModule: 'office'
        },
        's3Storage': {
            Class: require('evado/component/file/S3Storage'),
            accessKey: 'minioadmin',
            secretKey: 'minioadmin',
            bucket: 'demo',
            useSSL: false
        }
    },
    metaModels: {
        'base': {
            Class: require('evado-meta-base/base/BaseMeta')
        },
        'navigation': {
            Class: require('evado-meta-navigation/base/NavMeta')
        }
    },
    modules: {
        'api': {
            config: {
                modules: {
                    'base': {
                        Class: require('evado-api-base/Module')
                    },
                    'navigation': {
                        Class: require('evado-api-navigation/Module')
                    }
                }
            }
        },
        'studio': {
            Class: require('evado-module-studio/Module')
        },
        'office': {
            Class: require('../module/office/Module')
        },
        'account': {
            Class: require('evado-module-account/Module')
        },
        'admin': {
            Class: require('evado-module-admin/Module')
        }
    },
    assets: require('./default-assets'),
    users: require('./default-users'),
    userFilters: require('./default-userFilters'),
    security: require('./default-security'),
    notifications: require('./default-notifications'),
    tasks: require('./default-tasks'),
    utilities: require('./default-utilities'),
    eventHandlers: require('./default-eventHandlers'),
    listeners: require('./default-listeners'),
    sideMenu: require('./default-sideMenu'),
    params: {
        'dataHistoryTruncationThreshold': 10,
        'dataHistoryTruncationOffset': 5,
        'enablePasswordChange': true,
        'enablePasswordReset': false,
        'enableSignUp': true,
        'enableSignUpVerification': false,
        'languageToggle': true
    }
};