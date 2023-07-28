'use strict';

module.exports = [{
    description: 'Tracking user registration',
    events: 'auth.register',
    handlers: 'eventTracking'
}, {
    description: 'Tracking creation or transition of an object of the Listened class',
    events: [
        'meta.base.create.listened',
        'meta.base.transit.listened'
    ],
    handlers: 'eventTracking'
}, {
    description: 'New simple data notification',
    events: 'meta.base.create.simpleData',
    notifications: 'newSimpleData'
}];