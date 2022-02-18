'use strict';

const Base = require('areto/view/ViewModel');

module.exports = class CreationViewModel extends Base {

    async resolveTemplateData () {
        return {
            studioClassId: await this.getStudioClassId(this.data.model.class.name)
        };
    }

    getStudioClassId (name) {
        return this.spawn(StudioClass).find({name}).id();
    }
};

const StudioClass = require('evado-module-studio/model/Class');