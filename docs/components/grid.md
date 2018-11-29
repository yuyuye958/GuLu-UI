---
title: Grid 布局
---

# Grid 布局

24格的栅格布局，快速构建网页布局。

## 基础用法

`<g-row>` 行，`<g-col>` 列，通过 `span` 属性设置每一格的宽度。

<ClientOnly>
  <grid-demo1></grid-demo1>
</ClientOnly>

## 设置间隙

`gutter` 属性可设置分栏间隙。

<ClientOnly>
  <grid-demo2></grid-demo2>
</ClientOnly>

## 设置偏移

`offset` 属性可设置偏移的格子数。

<ClientOnly>
  <grid-demo3></grid-demo3>
</ClientOnly>

## 响应式布局

实现响应式布局，根据需求可设置四个参数：`pad`、`narrow-pc`、`pc` 和 `large-pc`，而 `span` 是作为 `phone` 默认参数。

<ClientOnly>
  <grid-demo4></grid-demo4>
</ClientOnly>

## g-row Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| - | :-: | :-: | :-: 
gutter | 栅格的间隙 | Number, String | —— | ——
align | 栅格内容的对齐方向 | String | left, right, center | ——

## g-col Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| - | :-: | :-: | :-: 
offset | 栅格的偏移 | Number, String | —— | ——
span | 栅格所占宽度的默认配置参数 | Number, String | —— | ——
pad,narrow-pc,pc,large-pc | 不同屏幕宽度下栅格所占宽度的配置参数，键对应分栏所占宽度。分别对应的 min-width 为 577px、769px、993px、1201px | Object | —— | —— 