/* eslint-env node, mocha */
'use strict';

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var assert = chai.assert;

describe('deploy-ftps', function() {
  var subject, plugin;

  beforeEach(function() {
    subject = require('../../index');
    plugin = subject.createDeployPlugin({
      name: 'ftps'
    });
  });

  describe('defaultConfig', () => {
    it('has name', () => {
      assert.equal(plugin.name, 'ftps');
    });

    it('has default config', () => {
      let defaultConfig = {
        port: 21,
        username: 'anonymous',
        password: 'anonymous',
        remoteRoot: '/',
        tls: false,
        clear: false
      };
      assert.deepEqual(plugin.defaultConfig, defaultConfig);
    });
  });

  describe('hooks', () => {
    it('implements the correct hooks', function() {
      assert.equal(typeof plugin.upload, 'function');
    });
  });
});
