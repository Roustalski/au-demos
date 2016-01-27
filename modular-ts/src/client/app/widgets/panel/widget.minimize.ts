import {autoinject, customElement, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from '../../utils/module';
import {EventTypes} from './widget.minimize.events';

@customElement('widget.minimize')
@autoinject
export class MinimizeWidget {
    @bindable context
    public isMinimized: boolean;
    public ea: EventAggregator;
    public logger: Log;

    constructor(ea: EventAggregator, logger: Log) {
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