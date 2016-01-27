export const EventTypes = Object.freeze({
    MINIMIZE: 'app/widgets/widget.minimize.events.minimize',
    RESTORE: 'app/widgets/widget.minimize.events.restore'
});

export enum Types {MINIMIZE, RESTORE};

export class MinimizeEvent extends Event {
    
}