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
    e2eSpecsSrc: 'test/e2e/src/*.js',
    e2eSpecsDist: 'test/e2e/dist/',
    aureliaTypingsSource: appRoot + 'jspm_packages/**/aurelia*/**.d.ts',
    aureliaTypingsDest: typingsRoot + 'aurelia/'
};
