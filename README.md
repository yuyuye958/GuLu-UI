# 基于Vue的 轱辘UI 框架

[![Build Status](https://www.travis-ci.org/yuyuye958/GuLu-UI.svg?branch=master)](https://www.travis-ci.org/yuyuye958/GuLu-UI)

## 介绍
这是我在学习 Vue 的过程中做的一个 UI 框架，希望能对你有所帮助。

## 开始使用

1. 添加 CSS 样式
    在使用本框架前，请把全局盒模型设为 border-box
    ```
    *, *::before, *::after {box-sizing: border-box;}
    ```
    IE 8 及以上浏览器都支持此样式。

    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```
    :root {
        --font-size: 14px;
        --color: #333;
        --button-height: 32px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    Edge 15 及以上浏览器都支持此样式。

2. 安装 轱辘UI
```
npm install --save allen-gulu-2018
```

3. 引入 轱辘UI
```
import {Button, ButtonGroup, Icon} from 'allen-gulu-2018'
import 'allen-gulu-2018/dist/index.css'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'g-button': Button,
    'g-icon': Icon
  }
}
```

## 文档

## 提问

## 变更记录

## 联系方式
E-mail: yuyuye958@qq.com
