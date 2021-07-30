export function foreach(obj:any, cb:any) {
    Object.keys(obj).forEach(item => {
        cb(item, obj[item])
    })
}