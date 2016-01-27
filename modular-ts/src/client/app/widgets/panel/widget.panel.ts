import {autoinject, customElement, bindable} from 'aurelia-framework';
import {VelocityAnimator} from "aurelia-animator-velocity";
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from '../../utils/module';
import * as MinimizeWidge from './widget.minimize.events';

@customElement('widget.panel')
@autoinject
export class PanelWidget {
    @bindable title: string;
    @bindable subtitle: string;
    @bindable rightText: string;
    @bindable allowCollapse: boolean;

    public ea: EventAggregator;
    public logger: Log;
    public element: Element;
    public animator: VelocityAnimator;
    public isContentHidden: boolean;
    public content: Element;

    constructor(ea: EventAggregator, logger: Log, element: Element, animator: VelocityAnimator) {
        this.ea = ea;
        this.logger = logger;
        this.element = element;
        this.animator = animator;

        this.ea.subscribe(MinimizeWidge.EventTypes.MINIMIZE, context => { this.onMinimize(context) });
        this.ea.subscribe(MinimizeWidge.EventTypes.RESTORE, context => { this.onRestore(context) });

        this.isContentHidden = false;
    }

    attached(): void {
        this.content = this.element.getElementsByClassName('widget-content')[0];
    }

    onMinimize(context): void {
        if (context !== this.title) {
            return;
        }

        this.logger.debug(`${context} minimized.`);

        //NOTE: I've opened a pull request to make the last two parameters optional: https://github.com/aurelia/animator-velocity/pull/7
        //Until the typing is updated, open up ./src/client/jspm_packages/npm/aurelia-animator-velocity@1.0.0-beta.1.0.1/aurelia-animator-velocity.d.ts
        //and modify line 45 to: animate(element: any, nameOrProps: any, options?: any, silent?: boolean): Promise<VelocityAnimator>;
        this.animator.animate(this.content, "slideUp");
    }

    onRestore(context): void {
        if (context !== this.title) {
            return;
        }

        this.logger.debug(`${context} restored.`);
        this.animator.animate(this.content, "slideDown");
    }
}