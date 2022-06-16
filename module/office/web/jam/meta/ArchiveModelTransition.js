/**
 * @copyright Copyright (c) 2022 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

Jam.ArchiveModelTransition = class ArchiveModelTransition extends Jam.ModelTransition {

    forceExecute () {
        return super.forceExecute().done(() => {
            this.model.frame.one('afterLoad', this.onAfterLoad.bind(this));
        });
    }

    onAfterLoad () {
        const model = this.model.findInstanceByFrame();
        Jam.dialog.info('Here, perform custom actions after the transition');
    }
};