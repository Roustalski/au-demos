import {DataService} from 'app-data-service';
import {HttpClient} from 'aurelia-fetch-client';

describe('core.dataservice', () => {
    it('should be defined', () => {
        expect(DataService).toBeDefined();
    });

    describe('getAvengers', () => {
        let http = new HttpClient();
        let instance = new DataService(http);

        beforeEach(done => {
            http.configure(config => {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('http://localhost:8080/');

                done();
            });
        });

        it('should be a function', () => {
            expect(instance.getAvengers).toEqual(jasmine.any(Function));
        });

        it('should return a promise', () => {
            expect(instance.getAvengers()).toEqual(jasmine.any(Promise));
        });

        it('should promise to resolve to an array', done => {
            instance.getAvengers().then(castList => {
                expect(castList).toEqual(jasmine.any(Array));
                done();
            }).catch(ex => {
                console.log(`name: ${ex.name}\nmsg: ${ex.message}\nstack: ${ex.stack}`);
                console.log('Is the server-node running?');
            });
        });

        it('should return 7 Avengers', done => {
            instance.getAvengers().then(castList => {
                expect(castList.length).toBe(7);
                done();
            })
        });

        it('should return Avenger objects with a name property', done => {
            instance.getAvengers().then(castList => {
                castList.forEach((cast, idx, arr) => {
                    expect(cast).toBeDefined();
                    expect(cast.name).toBeDefined();
                });
                done();
            })
        });

        it('should return an Avenger with the name Black Widow', done => {
            instance.getAvengers().then(castList => {
                expect(castList.some((cast, idx, arr) => {
                    return cast.name.indexOf("Black Widow") > -1;
                })).toBe(true);
                done();
            })
        });

    });

    describe('getAvengersCast', () => {
        let instance = new DataService();
        it('should be a function', () => {
            expect(typeof instance.getAvengersCast).toBe("function");
        });

        it('should return a promise', () => {
            expect(instance.getAvengersCast()).toEqual(jasmine.any(Promise));
        });

        it('should promise to resolve to an array', () => {
            instance.getAvengersCast().then(castList => {
                expect(castList).toEqual(jasmine.any(Array));
            });
        });

        it('should return cast objects with name and character properties', done => {
            instance.getAvengersCast().then(castList => {
                castList.forEach((cast, idx, arr) => {
                    expect(cast).toBeDefined();
                    expect(cast.name).toBeDefined();
                    expect(cast.character).toBeDefined();
                });
                done();
            });
        });
    });

    describe('getAvengersCount', () => {
        let instance = new DataService();
        it('should be a function', () => {
            expect(instance.getAvengersCount).toEqual(jasmine.any(Function));
        });

        it('should return a promise', () => {
            expect(instance.getAvengersCount()).toEqual(jasmine.any(Promise));
        });

        it('should return a number', done => {
            instance.getAvengersCount().then(count => {
                expect(count).not.toBeNaN();
                expect(count).toBeGreaterThan(0);
                done();
            });
        });
    });
});