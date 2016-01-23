import {Log} from 'app-log';
import {Settings} from 'app-settings';

var settings = new Settings();

describe('blocks.log', () => {
    it('should be defined', () => {
        expect(Log).toBeDefined();
    });

    var instance = new Log(settings);

    describe('should not throw errors', () => {
        it('when calling the error method', () => {
            expect(() => { instance.error('blah') }).not.toThrow();
        });

        it('when calling the warning method', () => {
            expect(() => { instance.warning('blah') }).not.toThrow();
        });

        it('when calling the info method', () => {
            expect(() => { instance.info('blah') }).not.toThrow();
        });

        it('when calling the success method', () => {
            expect(() => { instance.success('blah') }).not.toThrow();
        });
    });
});