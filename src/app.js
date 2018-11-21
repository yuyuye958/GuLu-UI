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


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: ''
    },
    methods: {
        inputChange(e) {
            console.log(e)
        },
        showToast() {
            this.$toast('您的请求已成功<a href="//www.baidu.com">baidu</a>', {
                autoCloseDelay: 5,
                closeButton: {
                    text: '知道了',
                    // callback(){
                    //     console.log('这里是closeButton的callback')
                    // }
                },
                enableHtml: true
            })
        }
    }
})