import { mount, route } from "navi";

export default mount({
  "/": route({
    title: "Chris Iversen",
    getView: () => import("../pages/main")
  })
});
