# contentful-nuxt

## Pre-req

Need to install sops and aws.

On mac using brew:

```bash
brew install sops
brew install awscli
```

Configure aws:

```bash
# Generating access key:
# https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html
# setup docs
# https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html
aws configure
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
