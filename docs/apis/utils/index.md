---
title: 工具类API
toc: menu
nav:
  title: 开放API（开发中）
  order: 2
group:
  title: 工具类API
  order: 1
---

<Alert type="error">
  注意：功能尚未完善
</Alert>
# 工具类API
## 日志输出
### 输出一段日志到控制台

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

### 日志分级

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

## AES/MD5 加密

首先创建一些 aes_encrypt、aes_decrypt、md5_encrypt 加密器对象：

```js
const {
  aes_encrypt,
  aes_decrypt,
  md5_encrypt,
} = require('../modules/utils/encryptor');
```

### AES 加密

- 示例：

```js
let res = new aes_encrypt(k, iv, data);
```

| 参数   | 数据类型 | 含义           |
| ------ | -------- | -------------- |
| `k`    | string   | 加密密钥       |
| `iv`   | string   | 加密偏移量     |
| `data` | string   | 需要加密的数据 |

### AES 解密

- 示例：

```js
let res = new aes_decrypt(k, iv, data);
```

| 参数   | 数据类型 | 含义           |
| ------ | -------- | -------------- |
| `k`    | string   | 解密密钥       |
| `iv`   | string   | 解密偏移量     |
| `data` | string   | 需要解密的数据 |

### MD5 加密

- 示例：

```js
let res = new md5_encrypt(data);
```

| 参数   | 数据类型 | 含义           |
| ------ | -------- | -------------- |
| `data` | string   | 需要加密的数据 |

## 异步 HTTP Get 请求

1. 创建一个 httpGet 对象：

```js
const { httpGet } = require('../modules/utils/network_request');
```

2. 向 URL 发起异步 HTTP GET 请求

```js
httpGet(url, function(err, resp, body) {
  console.log(err, resp, body);
});
```

| 参数  | 数据类型 | 含义           |
| ----- | -------- | -------------- |
| `url` | string   | 需要加密的数据 |

| 返回值 | 类型   | 说明     |
| ------ | ------ | -------- |
| `err`  | string | 错误代码 |
| `resp` | string | 响应代码 |
| `body` | string | 响应体   |

## 文本格式化

_tips:仅支持形如`{string}`的占位符_

1. 创建一个 lang 对象：

```js
const { lang } = require('../utils/lang_helper');
```

2. 对字符串进行占位符转换，例如：

```js
const str = '我是 {name} ！',
  obj = { name: '憨批' };
const result = lang(str, obj);
console.log(result);
```

| 参数  | 数据类型 | 含义             |
| ----- | -------- | ---------------- |
| `str` | string   | 需要处理的字符串 |
| `obj` | object   | 包含占位符的对象 |

输出结果：`我是 憨批 ！`

## SQLite3

1.首先，创建一个 sqlite3 对象

```js
const db = new sqlite3_helper(path);
```

| 参数   | 数据类型 | 含义                   |
| ------ | -------- | ---------------------- |
| `path` | string   | sqlite3 数据库文件路径 |

### 遍历

```js
db.all(sql, function(res) {
  console.log(res);
});
```

| 参数  | 数据类型 | 含义         |
| ----- | -------- | ------------ |
| `sql` | string   | SQL 查询语句 |

| 返回值 | 数据类型 | 含义         |
| ------ | -------- | ------------ |
| `res`  | array    | SQL 查询结果 |

### 运行 SQL 语句

```js
db.run(sql);
```

| 参数  | 数据类型 | 含义     |
| ----- | -------- | -------- |
| `sql` | string   | SQL 语句 |

### 执行事务

```js
db.exec(sql);
```

| 参数  | 数据类型 | 含义     |
| ----- | -------- | -------- |
| `sql` | string   | SQL 语句 |
