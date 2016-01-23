import {inject, customElement, bindable} from 'aurelia-framework';
import {VelocityAnimator} from "aurelia/animator-velocity";
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from 'app-log';
import * as MinimizeWidge from './widget.minimize.events';

@customElement('widget.panel')
@inject(EventAggregator, Log, Element, VelocityAnimator)
export class PanelWidget {
    @bindable title;
    @bindable subtitle;
    @bindable rightText;
    @bindable allowCollapse;

    constructor(ea, logger, element, animator) {
        this.ea = ea;
        this.logger = logger;
        this.element = element;
        this.animator = animator;

        this.ea.subscribe(MinimizeWidge.EventTypes.MINIMIZE, context => { this.onMinimize(context) });
        this.ea.subscribe(MinimizeWidge.EventTypes.RESTORE, context => { this.onRestore(context) });

        this.isContentHidden = false;
    }

    attached() {
        this.content = this.element.getElementsByClassName('widget-content')[0];
    }

    onMinimize(context) {
        if ( context !== this.title ) {
            return;
        }

        this.logger.debug(`${context} minimized.`);
        this.animator.animate(this.content, "slideUp");
    }

    onRestore(context) {
        if ( context !== this.title ) {
            return;
        }

        this.logger.debug(`${context} restored.`);
        this.animator.animate(this.content, "slideDown");
    }
}