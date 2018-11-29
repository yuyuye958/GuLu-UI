<template>
    <div style="margin: 30px 0">
        <g-layout>
            <g-header>
                <div class="header-demo demo">header</div>
            </g-header>
            <g-content>
                <div class="content-demo demo">content</div>
            </g-content>
            <g-footer>
                <div class="footer-demo demo">footer</div>
            </g-footer>
        </g-layout>
        <p></p>
        <g-layout>
            <g-header>
                <div class="header-demo demo">header</div>
            </g-header>
            <g-layout>
                <g-sider>
                    <div class="sider-demo demo">sider</div>
                </g-sider>
                <g-content>
                    <div class="content-demo demo">content</div>
                </g-content>
            </g-layout>
            <g-footer>
                <div class="footer-demo demo">footer</div>
            </g-footer>
        </g-layout>
        <p></p>
        <g-layout>
            <g-sider>
                <div class="sider-demo2 demo">sider</div>
            </g-sider>
            <g-layout>
                <g-header>
                    <div class="header-demo demo">header</div>
                </g-header>
                <g-layout>
                    <g-sider>
                        <div class="sider-demo demo">sider</div>
                    </g-sider>
                    <g-content>
                        <div class="content-demo demo">content</div>
                    </g-content>
                </g-layout>
                <g-footer>
                    <div class="footer-demo demo">footer</div>
                </g-footer>
            </g-layout>
        </g-layout>

        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Sider from '../../../src/sider'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'

    export default {
        components: {
            'g-layout': Layout,
            'g-header': Header,
            'g-sider': Sider,
            'g-content': Content,
            'g-footer': Footer
        },
        data() {
            return {
                content: `

                    <g-layout>
                      <g-header>header</g-header>
                      <g-content>content</g-content>
                      <g-footer>footer</g-footer>
                    </g-layout>

                    <g-layout>
                      <g-header>header</g-header>
                      <g-layout>
                          <g-sider>sider</g-sider>
                          <g-content>>content</g-content>
                      </g-layout>
                      <g-footer>footer</g-footer>
                    </g-layout>

                    <g-layout>
                      <g-sider>sider</g-sider>
                      <g-layout>
                        <g-header>header</g-header>
                        <g-layout>
                          <g-sider>sider</g-sider>
                          <g-content>content</g-content>
                        </g-layout>
                          <g-footer>footer</g-footer>
                      </g-layout>
                    </g-layout>
                `.replace(/ {8}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    .demo {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-demo, .footer-demo {
        background-color: #46ac7b;
        height: 50px;
    }

    .content-demo {
        background-color: #4abf8a;
        height: 150px;
    }

    .sider-demo {
        background-color: #4cd19a;
        height: 150px;
        width: 100px;
    }

    .sider-demo2 {
        height: 100%;
        background-color: #5ee9a6;
        width: 150px;
    }
</style>