import {autoinject} from 'aurelia-framework';
import {Log} from '../log/log.module';

@autoinject
export class Exception {
    private _logger: Log;
    consructor(log: Log) {
        this._logger = log;
    }

    catcher(message: string) {
        return (reason: string) => this._logger.error(message, reason);
    }
}