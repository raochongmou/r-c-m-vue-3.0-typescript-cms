import registerGlobalComponents from "./registerGlobalComponents";
import { App } from "vue";

export function globalRegister(app: App) {
  // registerGlobalComponents(app);
  app.use(registerGlobalComponents);
}
