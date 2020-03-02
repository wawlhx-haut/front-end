export * as hd from "./test1.js";
// 默认模块需要单独导出
export { default as houdunren } from "./test2.js";
// 以下方式导出默认模块是错误的
// export houdunren from "./houdunren.js";