const _APP_ROOT = "..";

export class RouterConfig {
    //FIXME: TODO: Locale
    constructor() {
        this.routes = [
            {
                route: ['', 'dashboard'],
                name: 'dashboard',
                moduleId: `${_APP_ROOT}/dashboard/dashboard.module`,
                nav: true,
                title: 'Dashboard'
            },
            {
                route: ['avengers'],
                name: 'avengers',
                moduleId: `${_APP_ROOT}/avengers/avengers.module`,
                nav: true,
                title: 'Avengers'
            }
        ];
    }
}