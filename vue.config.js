const { resolve } = require("path");
// 自动导入element-plus组件及样式
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const StyleImport = require("unplugin-element-plus/webpack");
// import Icons from 'unplugin-icons/vite'
// const Icons = require("unplugin-icons/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = {
  outputDir: "./test",
  publicPath: "./",
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
  devServer: {
    proxy: {
      "^/api": {
        pathRewrite: {
          "^/api": ""
        },
        target: "http://152.136.185.210:5000",
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      // Icons({
      //   resolvers: [ElementPlusResolver()]
      // }),
      StyleImport({
        resolvers: [ElementPlusResolver()]
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
};
