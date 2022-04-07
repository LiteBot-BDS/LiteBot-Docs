# 🌟 LiteBot Docs

LiteBot configuration guide, tutorial, API documentation

English | [简体中文](./README.zh-CN.md)

## ✨ Document wirting

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

## 📒 Catalog Introduction

```
├── docs                   Component documentation
│   ├── index.md           Home page
│   └── **.**              Site Directory Document
├── src                    Component home directory
│   ├── index.ts           Component registration
│   └── Foo                Component development
├── .eslintrc.js           eslint config
├── .fatherrc.ts           father config
├── .umirc.ts              dumi config
└── tsconfig.json          typescript config
```

## 🤖 Command introduction

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

See the dumi documentation：[https://d.umijs.org/zh-CN/guide](https://d.umijs.org/zh-CN/guide)
