---
title: 日志输出
toc: menu
nav:
  path: /openapi
  title: 开放API（开发中）
  order: 2
group:
  path: /openapi/intro
  title: API总览
  order: 1
---

## 输出一段日志到控制台

1. 首先，创建一个日志对象：

```javascript
const log = new LB.logger(pluginNane);
```

| 参数       | 数据类型 | 含义                       |
| ---------- | -------- | -------------------------- |
| pluginNane | string   | 日志输出的前缀（模块名称） |

2. 日志对象创建完成后，即可在模块内使用日志输出，例如：

```javascript
log.debug('我是日志');
```

## 日志分级

日志对象总共有 7 个分级。每个分级输出的日志将用不同颜色来标识。

| 属性      | 含义                        |
| --------- | --------------------------- |
| log.trace | 输出一条等级为“trace”的日志 |
| log.debug | 输出一条等级为“debug”的日志 |
| log.info  | 输出一条等级为“info”的日志  |
| log.warn  | 输出一条等级为“warn”的日志  |
| log.error | 输出一条等级为“error”的日志 |
| log.fatal | 输出一条等级为“fatal”的日志 |
| log.mark  | 输出一条等级为“mark”的日志  |
