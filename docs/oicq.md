---
title: OICQ
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

## QQ 事件监听

`LB.OICQ.onEvent(event,callback)`

| 参数     | 数据类型 | 含义                         |
| -------- | -------- | ---------------------------- |
| event    | string   | OICQ 事件类型                |
| callback | function | 回调函数，原型为 function(e) |

- 示例：

```javascript
//监听群成员增加事件
LB.OICQ.onEvent('notice.group.increase', e => {
  log.debug('新人来辣！');
  //将事件对象输出到控制台
  console.log(e);
});
```
