import { createRouter } from "../VueRouter"
const route = createRouter({ routes: [{ path: "bar", component: ["div", "dd"] }] })
export default route