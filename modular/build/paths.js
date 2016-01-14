var appRoot = 'src/client/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';
var typingsRoot = 'typings/'

module.exports = {
    root: appRoot,
    source: [
        appRoot + '**/*.js',
        '!' + appRoot + '**/jspm_packages/**',
        '!' + appRoot + 'config.js'
    ],
    html: appRoot + '**/*.html',
    css: appRoot + '**/*.css',
    style: 'styles/**/*.css',
    output: outputRoot,
    exportSrv: exportSrvRoot,
    doc: './doc',
    e2eSpecsSrc: 'src/client/test/e2e/src/*.js',
    e2eSpecsDist: 'src/client/test/e2e/dist/',
    aureliaTypingsSource: [
        appRoot + 'jspm_packages/**/aurelia*/**.d.ts',
        //https://github.com/aurelia/skeleton-navigation/blob/master/skeleton-typescript/typings/aurelia-protractor.d.ts
        //Note: The aurelia-protractor isn't in any of the DEV packages, so copy this file directly into your typings folder
        typingsRoot + 'aurelia-protractor.d.ts'
    ],
    aureliaTypingsDest: typingsRoot + 'aurelia/'
};
