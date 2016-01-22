import {inject, customElement, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from 'app-log';
import {EventTypes} from './widget.minimize.events';

@customElement('widget.minimize')
@inject(EventAggregator, Log)
export class MinimizeWidget {
    @bindable context

    constructor(ea, logger) {
        this.isMinimized = false;
        this.ea = ea;
        this.logger = logger;
    }

    toggle(event) {
        this.isMinimized = !this.isMinimized;
        this.logger.debug(`widget.minimize.state: ${this.isMinimized}`, event);
        this.ea.publish(this.isMinimized ? EventTypes.MINIMIZE : EventTypes.RESTORE, this.context);
    }
}