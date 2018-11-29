---
title: 快速上手
---

# 快速上手

在使用 `GuLu-UI` 之前，我假设您已经了解Vue、Vue组件、Vue单文件组件的基础知识。

## 使用 vue-cli@3
以 `vue-cli` 为例介绍如何在项目中使用 `GuLu-UI` 的组件，你可以用它们快速地实现一些常用组件的效果。
`vue-cli` 的搭建步骤请参见官网文档 [Vue CLI 3](https://cli.vuejs.org/zh/guide/) 。

## 引入并配置
在入口 `main.js` 文件中如下配置：
```
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'vue-gulu-ui'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
```

在 `App.vue` 文件中使用本框架的组件：
```
<script>
    // 引入组件
    import {Button, ButtonGroup} from 'vue-gulu-ui'
    // 需手动引入样式
    import 'vue-gulu-ui/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        'g-button': Button,
        'g-button-group': ButtonGroup
      }
    }
</script>
```

## 特别提醒
在使用 `GuLu-UI` 时，为避免影响组件样式，请使用 `border-box` 盒模型：
```
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```