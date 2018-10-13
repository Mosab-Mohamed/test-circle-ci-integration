# DCFS Time2Connect

## Prerequisites

Check that `node` and `yarn` are installed:

```sh
$ node -v
v9.5.0     # any version >= 8.12.0 is okay
$ yarn -v
1.9.4      # exact version should not matter
```

If not, install them from your package manager or here:

- node https://nodejs.org/en/download/
- yarn https://yarnpkg.com/en/docs/install

## Build

To build the project first install the dependencies:

```sh
$ yarn
```

Then bundle the project:

```sh
$ yarn build # the bundled output will be in the 'dist' directory
```

To serve the project locally for development or testing:

```sh
$ yarn serve # the project will be served on localhost:1234
$ yarn serve -p 8080 # to specify port use -p PORT
```

## API

API [documentation](http://docs.dcfs.apiary.io/) for DCFS Time2Connect supports two-way syncing with Apiary.

##### Running API tests

_Make sure the dependencies are installed first. To isntall dependencies run `yarn`._
From the command line, within the project directory, run `yarn dredd` without any parameters.
Tests should output to the console as well as to the ["Tests" tab](https://app.apiary.io/dcfs/tests/runs) within Apiary.

## Contributing

Please use pull requests for all code changes and Github Issues for issue tracking.

##### Git hooks

After installing the dependencies, two git hooks will be enabled automatically:

- `pre-commit`: eslint and stylelint will run on the staged files
- `commit-msg`: commitlint will run on the commit message

##### Commit Message Fromat

Ensure that the commit message follows the [conventional commit spec](https://www.conventionalcommits.org/en/v1.0.0-beta.2/):

```sh
$ git commit -m "type: subject reference"
```

`subject` is the commit message (lowercase with no ending period).
`reference` is the JIRA id `DCFS-XX`.
`type` is any of:

- build
- chore
- ci
- docs
- feature
- fix
- perf
- refactor
- revert
- style
- test

For example a valid commit message would be:

```sh
git commit -m "feature: add user login form DCFS-12"
```

##### Editor support

To detect and avoid linting and formatting errors setup the plugins/extensions for your code editor for the following:

- [eslint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [prettier](https://prettier.io/)

We recommend using [vscode](https://code.visualstudio.com/) because the path mapping and aliases should work out of the box.
