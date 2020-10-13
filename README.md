# Pigify eslint config

## How to install?
```
npm i -D eslint-config-pigify
or
yarn add -D eslint-config-pigify
```

## What is it about?
This repo contains our eslint config file. It should be uses across all new react projects to maintain consistent and speed up eslint configuration. It uses eslint-config-airbnb and eslint-config-prettier.

## What is happening?
Eslint configuration with all needed rules and ignore file are created and placed in the root of your project(`.eslintrc.js`, `.eslintignore`). To override react's config we have to create or edit `.env` file with `EXTEND_ESLINT=true declaration`.

## What is next?

1. You have to add npm tasks to start linting. Remeber to add path to files that should be linted!

Example:
```
"lint": "eslint --ignore-path .gitignore -c .eslintrc.json 'src/theme/**/{*.js,package.json}'",
"lint:fix": "eslint --fix --ignore-path .gitignore -c .eslintrc.json 'src/theme/**/{*.js,package.json}'"
```
or
```
"lint": "eslint src -c .eslintrc.json --ext js,jsx",
"lint:fix": "eslint src -c .eslintrc.json --fix --ext js,jsx"
```

2. Use it like this:
```
npm run lint
or
yarn lint
```