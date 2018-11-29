# 基于Vue的 GuLu - UI 框架

[![Build Status](https://www.travis-ci.org/yuyuye958/GuLu-UI.svg?branch=master)](https://www.travis-ci.org/yuyuye958/GuLu-UI)

## 介绍
这是我在学习 Vue 和理解组件化开发的过程中制作的一个 UI 框架，希望能对你有所帮助。

## 安装
克隆官方仓库或者使用 npm / yarn 安装
```
$ git clone git@github.com:yuyuye958/GuLu-UI.git
    
$ npm install vue-gulu-ui --save
$ yarn add vue-gulu-ui --save
```

## 使用
```
import {Button} from 'vue-gulu-ui'
import 'vue-gulu-ui/dist/index.css'
    
export default {
    components: {
        'g-button': Button
    }
}
```

## 注意
在使用本框架前，为避免影响组件样式，请使用 border-box 盒模型：
```
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## 文档
[我是链接](https://yuyuye958.github.io/GuLu-UI/)

## 联系方式
E-mail: yuyuye958@qq.com
