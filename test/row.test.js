const expect = chai.expect
import Vue from 'vue' // 这句浏览器是不认识的 所以要用工具打包
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    it('可以接收 gutter 属性', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
             <g-row gutter="30">
                 <g-col></g-col>
                 <g-col></g-col>
             <g-row>
         `
        const vm = new Vue({
            el: div
        })
        // 需要用异步来测试
        setTimeout(()=>{
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-15px')
            expect(getComputedStyle(row).marginRight).to.eq('-15px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('15px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('15px')
            //不加done的话测试框架默认都是同步的代码，不执行setTimeout里面的代码，直接退出页面
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    it('可以设置 align ', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'left'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.eq('flex-start')
        vm.$destroy()
    })
})