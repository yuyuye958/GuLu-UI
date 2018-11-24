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
import Toast from './Toast'
import Plugin from './plugin' // 插件
import Tabs from './tabs'
import TabsNav from './tabs-nav'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(Plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-nav', TabsNav)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '',
        selectedTab: 'sports'
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
        }
    }
})