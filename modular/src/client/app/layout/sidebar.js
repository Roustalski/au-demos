import {inject} from 'aurelia-framework';
import {VelocityAnimator} from "aurelia/animator-velocity";
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from 'app-log';
import {RouterConfig} from './router.config'

@inject(Log, RouterConfig, Element, VelocityAnimator, EventAggregator)
export class Sidebar {
    constructor(log, routerConfig, element, animator, ea) {
        this.log = log;
        this.routerConfig = routerConfig;
        this.element = element;
        this.animator = animator;

        this.isDropdownOpen = false;
        ea.subscribe('router:navigation:complete', payload => {
            this.closeDropdown();
        });
    }

    configureRouter(config, router) {
        config.map(this.routerConfig.routes);
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