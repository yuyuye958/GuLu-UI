const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

    it('存在', () => {
        expect(Popover).to.be.exist
    })

    it('可以设置 position ', (done) => {
        Vue.component('g-popover', Popover)
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
             <g-popover positon="top" ref="popover">
                 <template slot="content">
                     <div>popover内容</div>
                 </template>
                 <button>点我出现popover</button>
             </g-popover>
         `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click()
            setTimeout(() => {
                expect(vm.$refs.popover.$refs.contentWrapper.classList.contains('position-top')).to.be.true
                done()
            })
        })
    })
})