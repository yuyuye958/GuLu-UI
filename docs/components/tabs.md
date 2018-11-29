---
title: Tabs 标签
---

# Tabs 标签

用于切换选项卡。

## 基础用法

<ClientOnly>
  <tabs-demo1></tabs-demo1>
</ClientOnly>

## g-tabs Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| - | :-: | :-: | :-: 
selected | 当前选中的标签，必填，可用 .sync 修饰符绑定 | Number, String | —— | ——

## g-tabs-nav Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| - | :-: | :-: | :-: 
name | nav 的名称，必填，且与对应的 pane 一致 | Number, String | —— | ——
disabled | nav 禁用 | Boolean | —— | false

## g-tabs-pane Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| - | :-: | :-: | :-: 
name | pane 的名称，必填，且与对应的 nav 一致 | Number, String | —— | ——

