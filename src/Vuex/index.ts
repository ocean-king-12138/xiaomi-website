import { inject } from "vue"
import { storeKey, store } from "./store"
export function createStore(options:any) {

    return new store(options)
}
export function useStore(key = null) {
    return inject(key || storeKey)
}