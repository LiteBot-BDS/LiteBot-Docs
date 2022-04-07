---
title: 配置LLWebSocket
order: 1
toc: menu
nav:
  path: /guide
  title: 配置指南
  order: 1
group:
  path: /guide/first_init
  title: 初步配置
  order: 2
---

## 组件准备

LiteBot 目前支持的 WebSocket 组件为：

| WebSocket 组件                                                                          | 组件类型 | 依赖平台      | 作者      |
| --------------------------------------------------------------------------------------- | -------- | ------------- | --------- |
| [LLWebSocket](https://www.minebbs.com/resources/c-bdx-liteloader-bdswebsocketapi.2150/) | 服务器   | LiteLoaderBDS | WangYneos |

## 运行环境要求

主流的操作系统平台（包括但不限于 Windows、Linux、MacOS）

## 开始配置 LLWebSocket

1、按照 LLWebSocket 文档指示，下载并将 LLWebSocket 插件添加到您的 BDS；
2、修改 LLWebSocket 配置文件：

```json
{
  "wsaddr": "0.0.0.0:996", //务必按照“IP地址:端口”的格式进行填写，IP地址一般写0.0.0.0（即监听本机所有IP地址）
  "endpoint": "/mc", //可自定义，务必带前缀“/”
  "encrypt": "aes_cbc_pkcs7padding", //务必修改为“aes_cbc_pkcs7padding”
  "wspasswd": "32v34W#e6%E*6wv$^Vw?65a+",
  "enableLog": false
}
```

3、开服，然后开始配置 LiteBot
