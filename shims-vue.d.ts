// 帮助 ts 识别 .vue 文件，避免导入组件报异常
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}