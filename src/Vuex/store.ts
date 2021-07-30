import { reactive } from "vue";
import { foreach } from "./util";
export let storeKey = "store"
export class store {
    constructor(options:any) {
        //console.log(options)
            //state 响应式
        //@ts-ignore
        this.vm = reactive(options.state)
        let getters = options.getters
        //@ts-ignore
        this.getters = {}
        foreach(getters, (key: any, value: any) => {
            //@ts-ignore
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return value(this.state)
                }
            })
        })

        //mutattions
        let mutations = options.mutations
        //@ts-ignore
        this.mutations = {}
        foreach(mutations, (key: any, value: any) => {
            //@ts-ignore
                this.mutations[key] = (data:any) => { value(this.state, data) }
            })
            //
        let actions = options.actions
        //@ts-ignore
        this.actions = {}
        foreach(actions, (key: any, value: any) => {
            //@ts-ignore
            this.actions[key] = (data:any) => { value(this, data) }
        })
    }
    get state() {
        //@ts-ignore
        return this.vm
    }
    commit = (key: any, data: any) => {
        //@ts-ignore
        return this.mutations[key](data)
    }
    dispatch = (key: any, data: any) => {
        //@ts-ignore
        return this.actions[key](data)
    }
    install(app:any, key = null) {
        //console.log(app);
        //vue2的实现方法
        app.config.globalProperties.$store = this
        app.provide(key !== null ? key : storeKey, this)
    }
}