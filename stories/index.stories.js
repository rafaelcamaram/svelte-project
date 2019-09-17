import { storiesOf } from "@storybook/svelte";
import { action } from "@storybook/addon-actions";

import Greeting from "../src/components/presentational/Greeting";
import Button from "./button.svelte";

export default {
  title: "Components"
};

export const greeting = () => ({
  Component: Greeting,
  props: {}
});

export const button = () => ({
  Component: Button,
  props: {
    text: "Button text"
  },
  on: {
    click: action("Sample action")
  }
});

storiesOf("Presentational|Greeting", module)
  .add("Greeting with 'name' props", () => ({
    Component: Greeting,
    props: { name: "Rafael" }
  }))
  .add("Greeting with no 'name' props", () => ({
    Component: Greeting,
    props: {}
  }));
