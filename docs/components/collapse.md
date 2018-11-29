---
title: Collapse 折叠面板
---

# Collapse 折叠面板

将内容区域折叠 / 展开。

## 基础用法

<ClientOnly>
  <collapse-demo1></collapse-demo1>
</ClientOnly>

## 单个展开
在 `g-collapse` 上添加 `single` 属性

## g-collapse Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| - | :-: | :-: | :-: 
selected | 当前展开 item 的 name 组成的数组。可以用 .sync 修饰符绑定 | Array | —— | ——
single | 是否允许同时展开多个 item | Boolean | —— | false

## g-collapse-item Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| - | :-: | :-: | :-: 
name | item 的 name 属性，唯一且必填 | String | —— | ——
title | item 的 title 属性，即标题文本 | String | —— | ——
