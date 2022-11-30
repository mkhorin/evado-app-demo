'use strict';

const Base = require('evado-module-office/view/model/model/create');

module.exports = class CreationViewModel extends Base {

    async resolveTemplateData () {
        const data = await super.resolveTemplateData();
        const studioClassId = await this.getStudioClassId(this.data.model.class.name);
        return {
            ...data,
            studioClassId
        };
    }

    getStudioClassId (name) {
        return this.spawn(StudioClass).find({name}).id();
    }
};

const StudioClass = require('evado-module-studio/model/Class');