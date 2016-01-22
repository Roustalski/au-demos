import {inject, customElement, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from 'app-log';
import * as MinimizeWidge from './widget.minimize.events';

@customElement('widget.panel')
@inject(EventAggregator, Log, Element)
export class PanelWidget {
    @bindable title;
    @bindable subtitle;
    @bindable rightText;
    @bindable allowCollapse;

    constructor(ea, logger, element) {
        this.ea = ea;
        this.logger = logger;
        this.element = element;

        this.ea.subscribe(MinimizeWidge.EventTypes.MINIMIZE, context => { this.onMinimize(context) });
        this.ea.subscribe(MinimizeWidge.EventTypes.RESTORE, context => { this.onRestore(context) });

        this.isContentHidden = false;
    }

    onMinimize(context) {
        this.logger.debug(`${context} minimized.`);
        //this.element.toggle(500);
    }

    onRestore(context) {
        this.logger.debug(`${context} restored.`);
        //this.element.toggle(500);
    }
}