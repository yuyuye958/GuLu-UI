<template>
    <div style="margin: 30px 0">
        <g-input v-model="message"></g-input>
        <g-button @click="message+=1">+1</g-button>
        <p>您输入的内容为：{{message}}</p>

        <pre style="margin: 30px 0"><code>{{content}}</code></pre>

    </div>
</template>
<script>
    import Input from '../../../src/input'
    import Button from '../../../src/button'

    export default {
        components: {
            'g-input': Input,
            'g-button': Button,
        },
        data() {
            return {
                content: `
                    // template 内容
                    <g-input v-model="message"></g-input>
                    <g-button @click="message+=1">+1</g-button>
                    <p>您输入的内容为：{{message}}</p>

                    // data 内容
                    data() {
                      return {
                        message: '试着改变此处的内容'
                      }
                    }
                `.replace(/ {8}/gm, '').trim(),
                message: '试着改变此处的内容'
            }
        }
    }
</script>
<style>
    input {
        box-sizing: border-box;
        margin-right: 1em;
    }
</style>