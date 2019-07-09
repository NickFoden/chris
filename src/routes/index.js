import { mount, route } from "navi";

export default mount({
  "/": route({
    title: "Chris Iversen",
    getView: () => import("../components/pages/main")
  })
});
