# ember-cli-deploy-ftps
[![Build Status](https://travis-ci.org/medokin/ember-cli-deploy-ftps.svg?branch=master)](https://travis-ci.org/medokin/ember-cli-deploy-ftps)
[![Maintainability](https://api.codeclimate.com/v1/badges/e374892c414898ec443d/maintainability)](https://codeclimate.com/github/medokin/ember-cli-deploy-ftps/maintainability)
[![](https://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/plugins/ember-cli-deploy-s3.svg)](http://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-deploy-ftps.svg)](https://emberobserver.com/addons/ember-cli-deploy-ftps)


> An ember-cli-deploy plugin that uploads your build to to a FTP/S Server. Works with TLS!

This addon uses [basic-ftp][2], which requires node 7.6 or later.

## Quick Start
- Install this plugin

```bash
$ ember install ember-cli-deploy-ftps
```

- Place the following configuration into `config/deploy.js`

```javascript
ENV['ftps'] = {
  host: '<your-ftp-server>'
  username: '<user>',
  password: '<pass>'
}
```

- Run the pipeline

```bash
$ ember deploy
```

## Dependencies
Node 7.6 or later

## ember-cli-deploy Hooks Implemented

For detailed information on what plugin hooks are and how they work, please refer to the [Plugin Documentation][1].

- `upload`


## Configuration Options

For detailed information on how configuration of plugins works, please refer to the [Plugin Documentation][1].

### host (`required`)

The FTP Host name

*Default:* `undefined`

### port

The FTP host port

*Default:* `31`

### username

The FTP server login username

*Default:* `anonymous`

### password

The FTP server login password

*Default:* `anonymous`

### remoteRoot

Path on FTP server where the files will be uploaded to

*Default:* `/`

### tls

Set to `true` for FTP over TLS

*Default:* `false`

### clear

If set to `true`, `remoteRoot` will be emptied before upload

*Default:* `false`


## Running Tests
```bash
$ npm test
```

## Contributing
PRs welcome!

## License
MIT

[1]: http://ember-cli.github.io/ember-cli-deploy/plugins "Plugin Documentation"
[2]: https://github.com/patrickjuchli/basic-ftp "FTP/FTPS client for NodeJS"
