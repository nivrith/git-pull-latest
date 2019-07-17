# git-pull-latest

[![CircleCI](https://circleci.com/gh/nivrith/git-pull-latest/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/git-pull-latest/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/git-pull-latest.svg)](https://www.npmjs.com/package/git-pull-latest)
[![node](https://img.shields.io/node/v/git-pull-latest.svg)](https://www.npmjs.com/package/git-pull-latest)
[![License MIT](https://img.shields.io/github/license/nivrith/git-pull-latest.svg)](https://github.com/nivrith/git-pull-latest/blob/master/LICENSE)

git pull latest branch from remote

## Highlights

- Written in Typescript

- Async

- Promise API

## Usage

> git pull latest branch from remote

```js

  const  {gitPullLatest}  = from 'git-pull-latest';


  gitPullLatest('../is-n')
  .then((oid) => console.log(oid)); //90506d6b23ad2a044d69fcaed9f814d4d3ae2110

```

## License

MIT © [Nivrith](https://github.com/nivrith)
