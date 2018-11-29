<template>
    <div class="toast-demo" style="margin: 30px 0;">
        <g-button @click="showToast">点我</g-button>
        <g-button @click="showToastHTML">支持HTML</g-button>
        <g-button @click="showToastCallback">支持回调</g-button>

        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Toast from '../../../src/toast'
    import Plugin from '../../../src/plugin'
    import Button from '../../../src/button'
    import Vue from 'vue'
    Vue.use(Plugin)

    export default {
        components: {
            'g-button': Button,
            'g-toast': Toast
        },
        data(){
            return {
                content:`
                    <g-button @click="showToast">支持回调</g-button>

                    methods: {
                        showToast(){
                            this.$toast('还支持上中下，三个位置选择', {
                                position: 'bottom',
                                autoClose: 5,
                                enableHtml: false,
                                closeButton: {
                                    text: "好的",
                                    callback: ()=>{
                                        alert('支持回调!')
                                    }
                                }
                            })
                        }
                    }
                `.replace(/^ {16}/gm, '').trim()
            }
        },
        methods:{
            showToast(){
                this.$toast('这是 Toast 组件', {
                    closeButton: {
                        text: "知道了"
                    }
                })
            },
            showToastHTML(){
                this.$toast('点击访问我的<a href=\'https://github.com/yuyuye958/GuLu-UI\' target="_blank">Github</a>', {
                    position: 'middle',
                    autoClose: false,
                    enableHtml: true,
                    closeButton: {
                        text: "OK"
                    }
                })
            },
            showToastCallback(){
                this.$toast('还支持上中下，三个位置选择', {
                    position: 'bottom',
                    autoClose: 5,
                    closeButton: {
                        text: "好的",
                        callback: ()=>{
                            alert('支持回调!')
                        }
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .toast-demo {
        button{
            margin-right: 1em;
        }
    }
</style>