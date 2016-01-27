import {autoinject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {VelocityAnimator} from "aurelia-animator-velocity";
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from '../utils/module';
import {AppRoutes} from './app.routes'

@autoinject
export class Sidebar {
    public log: Log;
    public appRoutes: AppRoutes;
    public element: Element;
    public animator: VelocityAnimator;
    public isDropdownOpen: boolean;
    public router: Router;
    public content: Element;

    constructor(log: Log, appRoutes: AppRoutes, element: Element, animator: VelocityAnimator, ea: EventAggregator) {
        this.log = log;
        this.appRoutes = appRoutes;
        this.element = element;
        this.animator = animator;

        this.isDropdownOpen = false;
        ea.subscribe('router:navigation:complete', payload => {
            this.closeDropdown();
        });
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map(this.appRoutes.routes);
        this.router = router;
    }

    attached() {
        this.content = this.element.getElementsByClassName('sidebar-inner')[0];
    }

    closeDropdown() {
        if (this.isDropdownOpen) {
            this.toggle();
        }
    }

    toggle() {
        this.animator.animate(this.content, this.isDropdownOpen ? 'slideUp' : 'slideDown');
        this.isDropdownOpen = !this.isDropdownOpen;
    }
}