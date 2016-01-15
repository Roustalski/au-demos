import {Settings} from 'app-settings';

describe('core.settings', () => {
    it('should be defined', () => {
        expect(Settings).toBeDefined();
    });

    var instance = new Settings();

    describe('application configuration object', () => {
        it('should be defined', () => {
            expect(instance.app).toBeDefined();
        });

        describe('should have a title', () => {
            it('defined', () => {
                expect(instance.app.title).toBeDefined();
            });

            it('with a value of Aurelia Modular Demo', () => {
                expect(instance.app.title).toEqual("Aurelia Modular Demo");
            });
        });

        describe('should have a prefix', () => {
            it('defined', () => {
                expect(instance.app.prefix).toBeDefined();
            });

            it('with a value of MODULAR-APP', () => {
                expect(instance.app.prefix).toEqual("MODULAR-APP");
            });
        });

        describe('should have an unhandled exception event', () => {
            it('defined', () => {
                expect(instance.app.unhandledExceptionEvent).toBeDefined();
            });

            it('with a value of app-unhandled-exception', () => {
                expect(instance.app.unhandledExceptionEvent).toEqual("app-unhandled-exception");
            });
        });

        describe('should have an unhandled exception prefix', () => {
            it('defined', () => {
                expect(instance.app.unhandledExceptionPrefix).toBeDefined();
            });

            it('with a value of [UNHANDLED EXCEPTION]', () => {
                expect(instance.app.unhandledExceptionPrefix).toEqual("[UNHANDLED EXCEPTION]");
            });
        });
    });
});