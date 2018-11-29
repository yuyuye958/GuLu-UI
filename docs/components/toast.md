---
title: Toast 消息弹框
---

# Toast 消息弹框

常用于用户操作后的反馈提示。

## 基础用法

<ClientOnly>
  <toast-demo1></toast-demo1>
</ClientOnly>

## 全局方法

Toast 组件是以插件的方式引入的，它会为`Vue.prototype`添加全局方法`$toast`。
因此在Vue实例中可以采用本页面中的方式调用。

## Options

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| - | :-: | :-: | :-: 
position | 弹框的位置，默认顶部 | String | top, middle, bottom | top
autoClose | 弹框自动关闭的等待时间，默认3秒 | Boolean, Number | —— | 3
enableHtml | 消息文本是否支持HTML，默认不支持 | Boolean | —— | false
closeButton | 自定义关闭按钮的文本和回调函数，默认为‘关闭’和'undefined' | Object | —— | ——
