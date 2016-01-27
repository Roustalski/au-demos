var appRoot = 'src/client/';
var outputRoot = 'dist/';
var exporSrvtRoot = 'export/'

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  static: appRoot + 'content/**/*.*',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  outputContent: outputRoot + 'content/',
  exportSrv: exporSrvtRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/*.ts',
  e2eSpecsDist: 'test/e2e/dist/',
  dtsSrc: [
    'typings/**/*.ts',
    './src/client/jspm_packages/**/*.d.ts'
  ]
}