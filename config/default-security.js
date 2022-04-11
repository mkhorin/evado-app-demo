'use strict';

const parent = require('evado/config/default-security');

module.exports = {

    metaPermissions: [{
        description: 'Full access to all',
        roles: [
            'administrator',
            'guest'
        ],
        type: 'allow',
        actions: 'all',
        targets: {
            type: 'all'
        }
    }],

    permissions: {
        ...parent.permissions,

        'moduleAdmin': {
            label: 'Administration module',
            description: 'Access to the Administration module'
        },
        'moduleOffice': {
            label: 'Office module',
            description: 'Access to the Office module'
        },
        'moduleStudio': {
            label: 'Studio module',
            description: 'Access to the Studio module'
        },
        'moduleApiBaseUpload': {
            label: 'Upload files',
            description: 'Uploading files through the base metadata API module'
        }
    },

    roles: {
        'administrator': {
            label: 'Administrator',
            description: 'Full access to system',
            children: [
                'moduleAdmin',
                'moduleOffice',
                'moduleStudio',
                'moduleApiBaseUpload'
            ]
        },
        'guest': {
            label: 'Guest',
            description: 'Auto-assigned role for anonymous users',
            children: 'administrator'
        },
        'user': {
            label: 'User',
            description: 'Default role for authenticated users',
            children: [
                'moduleOffice',
                'moduleStudio',
                'moduleApiBaseUpload'
            ]
        },
        'autoAssignedRole': {
            label: 'Auto assigned role',
            description: 'Dynamically assigned role by assignment rule',
            assignmentRules: 'assignmentRule'
        }
    },

    rules: {
        'creator': {
            label: 'Creator',
            description: 'Check user binding as object creator',
            config: {
                Class: 'evado/component/meta/rbac/rule/UserRule',
                userAttr: '_creator'
            }
        }
    },

    // bind users to roles
    assignments: {
        'Adam': 'administrator'
    },

    // rules to auto-bind roles to users
    assignmentRules: {
        'assignmentRule': {
            active: true,
            label: 'Assignment rule',
            description: 'Rule for dynamically assigning a role to a user',
            config: {
                Class: 'evado/component/meta/rbac/assignment/BaseAssignmentRule'
            }
        }
    }
};