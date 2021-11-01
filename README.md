# milvus-insight-plugin-template

## Overview
`milvus-insight-plugin-template` is a template repo for developing plugins under [milvus-insight](https://github.com/zilliztech/milvus-insight).
You can develop your plugins(both client and server) under `src/<your plugin directory>/*`.

## Structure
```
.
├── LICENSE
├── README.md
├── lerna.json
├── milvus-insight
│   ├── CODE_OF_CONDUCT.md
│   ├── Dockerfile
│   ├── LICENSE
│   ├── README.md
│   ├── checkInsight.js
│   ├── client
│   │   ├── README.md
│   │   ├── config-overrides.js
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── public
│   │   ├── src
│   │   ├── tsconfig.json
│   │   ├── tsconfig.paths.json
│   │   ├── tsconfig.paths.plugin.json
│   │   └── yarn.lock
│   ├── express
│   │   ├── dist
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── src
│   │   ├── tsconfig.json
│   │   ├── tslint.json
│   │   └── yarn.lock
│   └── package.json
├── package.json
├── src
│   └── example_plugin
│       ├── README.md
│       ├── client
│       │   ├── Index.tsx
│       │   ├── config.json
│       │   └── package.json
│       └── server
│           ├── app.ts
│           ├── config.json
│           └── package.json
└── yarn.lock
```
## Steps
### Init `milvus-insight`

`git submodule update --remote`

Currently you need to manually change submodule's branch until all prs merged.
```bash
cd milvus-insight
git checkout plugin-enable
git pull
cd client
yarn
cd ../express
yarn
cd ../..
```

### Init `src/`

`npx lerna bootstrap`

### Modify(temp) and run `milvus-insight` client 

```bash
cd milvus-insight/client
rm -fr tsconfig.paths.json
mv tsconfig.paths.plugin.json tsconfig.paths.json
yarn start:plugin
```

### Run `milvus-insight` server 

```bash
cd milvus-insight/express
yarn build
cross-env PLUGIN_DEV=1 node dist/milvus_insight/express/src/app.js
```

### Start developing

You can write your plugins now.

Client plugins support fast refresh, and server plugins need rebuild.

## Next step
