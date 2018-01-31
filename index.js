'use strict';

const BasePlugin = require('ember-cli-deploy-plugin');
const ftp = require("basic-ftp");

module.exports = {
  name: 'ember-cli-deploy-ftps',

  createDeployPlugin: function(options) {
    let DeployPlugin = BasePlugin.extend({
      name: options.name,
      /*eslint-disable */
      // supress avoid-leaking-state-in-ember-objects rule
      requiredConfig: ['host'],

      defaultConfig: {
        port: 21,
        username: 'anonymous',
        password: 'anonymous',
        remoteRoot: '/',
        tls: false,
        clear: false
      },

      /*eslint-enable */

      upload: async function(context) {
        let config = {
          host: this.readConfig('host'),
          port: this.readConfig('port'),
          username: this.readConfig('username'),
          password: this.readConfig('password'),
          tls: this.readConfig('tls'),
          localRoot: context.distDir,
          remoteRoot: this.readConfig('remoteRoot'),
        };

        this.log('Preparing to upload to FTP host `' + config.host + '`', {
          verbose: true
        });

        const client = new ftp.Client();
        client.ftp.verbose = this.ui.verbose;

        await client.connect(config.host, config.port);
        if (config.tls) {
          await client.useTLS();
        }

        await client.login(config.username, config.password);
        await client.cd(config.remoteRoot);
        await client.useDefaultSettings();
        await client.clearWorkingDir();
        await client.uploadDir(config.localRoot);

        client.close();
      },
    });

    return new DeployPlugin();
  }
};
