// import AutoImport from "unplugin-auto-import/webpack";

module.exports = {
  plugins: [
    // AutoImport({
    //   resolvers: [ElementPlusResolver()]
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()]
    // })
    // ElementPlus({
    //   importStyle: "sass",
    //   useSource: true
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()]
    // })
    // [
    //   "import",
    //   {
    //     libraryName: "element-plus",
    //     // 引入组件
    //     customName: (name) => {
    //       name = name.slice(3);
    //       return `element-plus/lib/components/${name}`;
    //     },
    //     // 引入样式
    //     customStyleName: (name) => {
    //       name = name.slice(3);
    //       // 如果你需要引入 [name].scss 文件，你需要用下面这行
    //       // return `element-plus/lib/components/${name}/style`
    //       // 引入 [name].css
    //       return `element-plus/lib/components/${name}/style/css`;
    //     }
    //   }
    // ]
  ],
  presets: ["@vue/cli-plugin-babel/preset"]
};
