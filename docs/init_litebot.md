---
title: 配置LiteBot
order: 2
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

## 运行环境要求

主流的操作系统平台（包括但不限于 Windows、Linux、MacOS）

## 下载和配置 LiteBot

### 对于 Windows 用户

1. 下载 LiteBot；
2. 将压缩包内的所有文件解压，进入解压后的文件夹，复制 examples 文件夹并重命名为 config；
3. 打开 LiteBot 全局配置文件`./config/global_config.yml`，按照文件内的提示进行修改；
4. 修改完成后,保存并退出。

### 对于 Linux 用户

1. 在终端输入以下命令，执行快速初始化:

```bash
wget -qO- https://gitee.com/litebot/litebot-scripts/raw/master/init.sh | bash
```

2. 初始化完成后，进入 LiteBot 根目录（位置：`/opt/LiteBot`）；
3. 打开 LiteBot 全局配置文件`./config/global_config.yml`，按照文件内的提示进行修改；
4. 修改完成后,保存并退出。

## 运行 LiteBot

在 LiteBot 根目录打开终端，输入以下命令启动 LiteBot：

```bash
node app.js
```

当控制台出现以下类似的内容时，说明 LiteBot 已经可以正常使用：

```bash
  ####+++#################
  ####  +###############
  ####            ####
  ####          ####
  ####        ####
  ####      ####             LiteBot 3.0.0 Preview 1
  ####    ####               Powered by OICQ
  ####      ####             ©2022 Asurin219 All rights reserved.
  ####        ####
  ####          ####
  ####            ####
  ######################
  ########################


[2022-04-02T23:00:01.215] [MARK] [iPad:123456789] - ----------
[2022-04-02T23:00:01.216] [MARK] [iPad:123456789] - Package Version: oicq@2.2.1 (Released on 2021/3/16)
[2022-04-02T23:00:01.216] [MARK] [iPad:123456789] - View Changelogs：https://github.com/takayama-lily/oicq/releases
[2022-04-02T23:00:01.216] [MARK] [iPad:123456789] - ----------
[2022-04-02T23:00:01.330] [INFO] [WebSocket] - 服务器 “纯生存服” 连接成功
[2022-04-02T23:00:01.330] [INFO] [WebSocket] - 服务器 “建筑创造服” 连接成功
[2022-04-02T23:00:01.331] [INFO] [WebSocket] - 服务器 “空岛生存服” 连接成功
[2022-04-02T23:00:01.381] [MARK] [iPad:123456789] - 113.96.18.253:8080 connected
[2022-04-02T23:00:01.743] [MARK] [iPad:123456789] - Welcome, LiteBot Bot ! 正在加载资源...
[2022-04-02T23:00:01.997] [MARK] [iPad:123456789] - 加载了3个好友，2个群，0个陌生人
[2022-04-02T23:00:01.998] [INFO] [OICQ] - 登录成功，开始处理消息
```
