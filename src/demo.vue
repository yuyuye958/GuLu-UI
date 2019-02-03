<template>
  <div style="margin: 50px">
    <g-cascader :source="cascaderData" popover-height="200px" :selected="selectedCascader"
                @update:selected="selectedCascader = $event">
      1
    </g-cascader>

    <g-collapse :selected.sync="selectedCollapse" single>
      <g-collapse-item title="标题1" name="1">collapse1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">collapse2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">collapse3</g-collapse-item>
    </g-collapse>
    {{selectedCollapse}}

    <g-popover>
      <template slot="content">
        <div>popover的内容popover的内容
          <a href="http://www.qq.com">QQ</a>
        </div>
      </template>
      <g-button>popover</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content" slot-scope="{close}">
        <div>popover的内容popover的内容</div>
        <g-button @click="close">关闭</g-button>
      </template>
      <g-button>popover</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content">
        <div>popover的内容popover的内容</div>
      </template>
      <g-button>popover</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <template slot="content">
        <div>popover的内容popover的内容</div>
      </template>
      <g-button>popover</g-button>
    </g-popover>

    <!--<g-tabs :selected="selectedTab" @update:selected="selectedTab = $event">-->
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-nav>
        <template slot="actions">
          <button>设置</button>
        </template>
        <g-tabs-item name="sports">
          <g-icon name="right"></g-icon>
          体育
        </g-tabs-item>
        <g-tabs-item name="comic" disabled>
          动漫
        </g-tabs-item>
        <g-tabs-item name="games">
          游戏
        </g-tabs-item>
      </g-tabs-nav>
      <g-tabs-body>
        <g-tabs-pane name="sports">
          体育体育体育
        </g-tabs-pane>
        <g-tabs-pane name="comic">
          动漫动漫动漫
        </g-tabs-pane>
        <g-tabs-pane name="games">
          游戏游戏游戏
        </g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

    <button @click="showToast">showToast</button>

    <g-layout>
      <g-header class="demo">header</g-header>
      <g-layout>
        <g-sider class="demo">sider</g-sider>
        <g-content class="demo">content</g-content>
      </g-layout>
      <g-footer class="demo">footer</g-footer>
    </g-layout>

    <g-row>
      <g-col :span="24"
             :pad="{span:16, offset:0}"
             :narrow-pc="{span:8, offset:0}"
             :pc="{span:6, offset:0}"
      >2
      </g-col>
      <g-col :span="24"
             :pad="{span:8, offset:0}"
             :narrow-pc="{span:16, offset:0}"
             :pc="{span:18, offset:0}"
      >22
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="2">1</g-col>
      <g-col span="20" offset="2">2</g-col>
    </g-row>
    <g-row>
      <g-col span="9">
        <g-row align="left">
          <g-col>1</g-col>
          <g-col>2</g-col>
          <g-col>3</g-col>
        </g-row>
      </g-col>
      <g-col span="15">
        <g-row align="right">
          <g-col>1</g-col>
          <g-col>2</g-col>
          <g-col>3</g-col>
        </g-row>
      </g-col>
    </g-row>

    <div class="box">
      <g-input value="allen1"></g-input>
      <g-input value="allen2" disabled></g-input>
      <g-input value="allen3" readonly></g-input>
    </div>
    <div class="box">
      <g-input v-model="message"></g-input>
      <p>{{message}}</p>
      <button @click="message+=1">+1</button>
    </div>
    <div class="box">
      <g-button loading>
        按钮
      </g-button>
      <g-button icon="settings" loading>
        按钮
      </g-button>
      <g-button icon="settings" icon-position="right" loading>
        按钮
      </g-button>
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Button from './button'
  import Icon from './icon'
  import ButtonGroup from './button-group'
  import Input from './input'
  import Row from './row'
  import Col from './col'
  import Layout from './layout'
  import Header from './header'
  import Sider from './sider'
  import Content from './content'
  import Footer from './footer'
  import Toast from './toast'
  import Plugin from './plugin' // 插件
  import Tabs from './tabs'
  import TabsNav from './tabs-nav'
  import TabsBody from './tabs-body'
  import TabsItem from './tabs-item'
  import TabsPane from './tabs-pane'
  import Popover from './popover'
  import Collapse from './collapse'
  import CollapseItem from './collapse-item'
  import Sticky from './sticky'
  import Cascader from './cascader'

  Vue.use(Plugin)

  export default {
    name: 'demo',
    components: {
      'g-button': Button,
      'g-icon': Icon,
      'g-button-group': ButtonGroup,
      'g-input': Input,
      'g-row': Row,
      'g-col': Col,
      'g-layout': Layout,
      'g-header': Header,
      'g-sider': Sider,
      'g-content': Content,
      'g-footer': Footer,
      'g-toast': Toast,
      'g-tabs': Tabs,
      'g-tabs-nav': TabsNav,
      'g-tabs-body': TabsBody,
      'g-tabs-item': TabsItem,
      'g-tabs-pane': TabsPane,
      'g-popover': Popover,
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem,
      'g-sticky': Sticky,
      'g-cascader': Cascader
    },
    data() {
      return {
        message: '',
        selectedTab: 'sports',
        selectedCollapse: ['2', '3'],
        selectedCascader: [],
        cascaderData: [
          {
            name: '江苏',
            children: [
              {
                name: '苏州',
                children: [
                  {name: '苏州1'},
                  {name: '苏州2'}
                ]
              },
              {
                name: '南通',
                children: [
                  {name: '南通1'},
                  {name: '南通2'}
                ]
              }
            ]
          },
          {
            name: '浙江',
            children: [
              {
                name: '杭州',
                children: [
                  {name: '杭州1'},
                  {name: '杭州2'}
                ]
              },
              {
                name: '宁波',
                children: [
                  {name: '宁波1'},
                  {name: '宁波2'}
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      showToast() {
        this.$toast('您的请求已成功', {
          position: 'top',
          autoClose: 5,
          closeButton: {
            text: '知道了',
            // callback(){
            //     console.log('这里是closeButton的callback')
            // }
          },
          enableHtml: false
        })
      },
    }
  }

</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

  .box {
    margin: 20px;
  }

  .demo {
    border: 1px solid red;
    min-height: 100px;
  }
</style>