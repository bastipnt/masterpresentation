import { mount } from "svelte";
import "./index.css";
import config from "./config";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app")!,
  props: config,
});

export default app;
