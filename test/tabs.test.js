const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsNav from '../src/tabs-nav'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-nav', TabsNav)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('可以接受 selected ', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-tabs selected="tab1">
                 <g-tabs-nav>
                     <g-tabs-item name="tab1">标签一</g-tabs-item>
                     <g-tabs-item name="tab2">标签二</g-tabs-item>
                     <g-tabs-item name="tab3">标签三</g-tabs-item>
                 </g-tabs-nav>
                 <g-tabs-body>
                     <g-tabs-pane name="tab1">这里是标签1的内容</g-tabs-pane>
                     <g-tabs-pane name="tab2">这里是标签2的内容</g-tabs-pane>
                     <g-tabs-pane name="tab3">这里是标签3的内容</g-tabs-pane>
                 </g-tabs-body>
             </g-tabs>
          `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let activeItem = vm.$el.querySelector('.tabs-item[data-name="tab1"]')
            expect(activeItem.classList.contains('active')).to.be.true
            done()
        })
    })

    it('可以接受 name ', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: "xxx"
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })

    it('可以接受 disabled ', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})