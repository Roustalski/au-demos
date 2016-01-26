const _APP_ROOT: string = '..';

export class RouterConfig {
    routes = [
        {
            route: ['', 'dashboard'],
            name: 'dashboard',
            moduleId: `${_APP_ROOT}/dashboard/dashboard.module`,
            nav: true,
            title: 'Dashboard',
            icon: 'fa fa-dashboard'
        },
        {
            route: ['avengers'],
            name: 'avengers',
            moduleId: `${_APP_ROOT}/avengers/avengers.module`,
            nav: true,
            title: 'Avengers',
            icon: 'fa fa-lock'
        }
    ];
}