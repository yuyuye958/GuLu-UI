const expect = chai.expect
import Vue from 'vue' // 这句浏览器是不认识的 所以要用工具打包
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    it('可以接收 span ', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 3
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-3')).to.eq(true)
        vm.$destroy()
    })
    it('可以接收 offset ', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 3
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-3')).to.eq(true)
        vm.$destroy()
    })
    it('可以接收 pad ', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pad: {span:2, offset:3}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pad-2')).to.eq(true)
        expect(element.classList.contains('offset-pad-3')).to.eq(true)
        vm.$destroy()
    })
    it('可以接收 narrowPc ', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span:2, offset:3}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-narrow-pc-2')).to.eq(true)
        expect(element.classList.contains('offset-narrow-pc-3')).to.eq(true)
        vm.$destroy()
    })
    it('可以接收 pc ', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span:2, offset:3}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pc-2')).to.eq(true)
        expect(element.classList.contains('offset-pc-3')).to.eq(true)
        vm.$destroy()
    })
    it('可以接收 largePc ', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                largePc: {span:2, offset:3}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-large-pc-2')).to.eq(true)
        expect(element.classList.contains('offset-large-pc-3')).to.eq(true)
        vm.$destroy()
    })
})