---
title: OICQ
toc: menu
nav:
  title: 开放API（开发中）
  order: 2
group:
  title: OICQ
  order: 2
---

<Alert type="error">
  注意：功能尚未完善
</Alert>

## QQ 事件监听

`LB.OICQ.onEvent(event,callback)`

| 参数       | 数据类型 | 含义                                                                                                          |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| `event`    | string   | OICQ 事件类型。关于 OICQ 事件，请参阅 [OICQ 事件文档](https://github.com/takayama-lily/oicq/wiki/92.事件文档) |
| `callback` | function | 监听到相关事件后被调用的回调函数                                                                              |

其中，参数`callback`的回调函数原型为`function(e)`

| 参数 | 数据类型 | 含义           |
| ---- | -------- | -------------- |
| `e`  | Object   | 相关事件的对象 |

- 示例（将刚入群的新成员 QQ 打印到控制台）：

```javascript
//监听群成员增加事件
LB.OICQ.onEvent('notice.group.increase', function(e) {
  log.debug('新人来辣！');
  //将事件对象输出到控制台
  console.log(`新人的QQ是：${e.user_id}`);
});
```
