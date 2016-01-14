import {UnhandledExceptionProvider} from 'app-exception-provider';
import {UnhandledExceptionHandler} from 'app-exception-handler';

describe('blocks.exception', () => {

    describe('provider', () => {
        it('should be defined', () => {
            expect(UnhandledExceptionProvider).toBeDefined();
        });
    })

    describe('handler', () => {
        it('should be defined', () => {
            expect(UnhandledExceptionHandler).toBeDefined();
        });
    });

});
