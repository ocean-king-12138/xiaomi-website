import { inject, reactive } from "@vue/runtime-core"
import { h, ref, computed } from "vue";
const routerKey = "router"
//@ts-ignore
let op;
//@ts-ignore
let _vue;
class router {
    constructor(options: any) {
        //@ts-ignore

        this.routes = options.routes

        //@ts-ignore
        this.current = ref("/")
        //@ts-ignore

        this.mode = options.mode || "hash"
        this.init()

    }
    init() {
        //@ts-ignore
        if (this.mode === "hash") {
            // console.log( window.location.hash);
            window.addEventListener("load", () => {
                //@ts-ignore
                this.current.value = window.location.hash.slice(1)

            })
            window.addEventListener("hashchange", () => {
                //@ts-ignore
                this.current.value = window.location.hash.slice(1)
            })
        }


    }
    install(vue: any, options: any) {
        //@ts-ignore
        options = this
        _vue = vue;
        _vue.mixin({
            beforeCreate() {

                this.$router = options

                // console.log(vue.prototype)
            }
        })
        _vue.component("router-link", {
            render() {
                return h("a", { href: '#' + this.to }, this.$slots.default())
            }, props: {
                to: {
                    type: String,
                    required: true
                }
            }
        })
        _vue.component("router-view", {
            //当前的路由地址
            render() {


                //@ts-ignore


                let current = this.$router.current
                let routes = this.$router.routes
                console.log(this.$router)
                console.log(routes)
                let com = routes.find((item: any) => {
                    return item.path === current
                })
                console.log(current)


                return current.value === "" ? h("div", "router-view") : h("div", "bar")
            }
        })
    }

}
export function createRouter(options: any) {
    return new router(options);
}
export function useRoute(key = null) {
    return inject(key || routerKey)
}