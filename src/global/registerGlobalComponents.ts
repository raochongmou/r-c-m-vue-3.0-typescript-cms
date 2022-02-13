import { ElButton, ElInput } from "element-plus/lib/components";
// import "element-plus/dist/index.css";
import { App } from "vue";
const components = [ElButton, ElInput];
export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
