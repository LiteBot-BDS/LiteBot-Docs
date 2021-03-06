# đ LiteBot Docs

LiteBot configuration guide, tutorial, API documentation

English | [įŽäŊä¸­æ](./README.zh-CN.md)

## â¨ Document wirting

### Prepare

1. Clone this repository:

```bash
git clone git@github.com:LiteBot-BDS/LiteBot-Docs.git
```

2. Change the directory to this repository,install dependent modules:

```bash
cd LiteBot-Docs
npm install --save
```

3.Change the directory to `docs`,begin to write documents.

## đ Catalog Introduction

```
âââ docs                   Component documentation
â   âââ index.md           Home page
â   âââ **.**              Site Directory Document
âââ src                    Component home directory
â   âââ index.ts           Component registration
â   âââ Foo                Component development
âââ .eslintrc.js           eslint config
âââ .fatherrc.ts           father config
âââ .umirc.ts              dumi config
âââ tsconfig.json          typescript config
```

## đ¤ Command introduction

| Name                    | Description               | Remarks                                                                                                            |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `npm run start`         | Project begining          | Document usage [dumi](https://github.com/umijs/dumi), component development and documentation development together |
| `npm run test`          | Component test            | -                                                                                                                  |
| `npm run test:coverage` | Code coverage review      | -                                                                                                                  |
| `npm run prettier`      | Code prettier             | -                                                                                                                  |
| `npm run build`         | Component packaging       | Use [father](https://github.com/umijs/father)                                                                      |
| `npm run release`       | Component package release | -                                                                                                                  |
| `npm run docs:build`    | Document packaging        | -                                                                                                                  |
| `npm run docs:deploy`   | Document release          | The default is to use GitHub Pages                                                                                 |
| `npm run deploy`        | Document package release  | -                                                                                                                  |

### More

See the dumi documentationīŧ[https://d.umijs.org/zh-CN/guide](https://d.umijs.org/zh-CN/guide)
