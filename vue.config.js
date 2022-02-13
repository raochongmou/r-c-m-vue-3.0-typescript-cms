const { resolve } = require("path");
// import { AutoImport } from "unplugin-auto-import/webpack";
// 自动导入element-plus组件及样式
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = {
  outputDir: "./build",
  // publicPath: "./",
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: "@/components"
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": resolve(__dirname, "src"),
  //     components: "@/components"
  //   };
  // }
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve(__dirname, "src"))
      .set("components", "@/components")
      .set("views", "@/views");
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
};
