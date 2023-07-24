---
title: "::slotted()"
slug: Web/CSS/::slotted
page-type: css-pseudo-element
browser-compat: css.selectors.slotted
---

{{CSSRef}}

The **`::slotted()`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents any element that has been placed into a slot inside an HTML template (see [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots) for more information).

This only works when used inside CSS placed within a [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM). Note also that this selector won't select a text node placed into a slot; it only targets actual elements.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-slotted.html", "tabbed-shorter")}}

```css
/* Selects any element placed inside a slot */
::slotted(*) {
  font-weight: bold;
}

/* Selects any <span> placed inside a slot */
::slotted(span) {
  font-weight: bold;
}
```

## Syntax

```css-nolint
::slotted(<compound-selector>) {
  /* ... */
}
```

## Examples

### Highlighting slotted elements

The following snippets are taken from our [slotted-pseudo-element](https://github.com/mdn/web-components-examples/tree/main/slotted-pseudo-element) demo ([see it live also](https://mdn.github.io/web-components-examples/slotted-pseudo-element/)).

In this demo we use a simple template with three slots:

```html
<template id="person-template">
  <div>
    <h2>Personal ID Card</h2>
    <slot name="person-name">NAME MISSING</slot>
    <ul>
      <li><slot name="person-age">AGE MISSING</slot></li>
      <li><slot name="person-occupation">OCCUPATION MISSING</slot></li>
    </ul>
  </div>
</template>
```

A custom element — `<person-details>` — is defined like so:

```js
customElements.define(
  "person-details",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("person-template");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });

      let style = document.createElement("style");
      style.textContent =
        "div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }" +
        "h2 { margin: 0 0 10px; }" +
        "ul { margin: 0; }" +
        "p { margin: 10px 0; }" +
        "::slotted(*) { color: gray; font-family: sans-serif; } ";

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

You'll see that when filling the `style` element with content, we select all slotted elements (`::slotted(*)`) and give them a different font and color. This allows them to stand out better next to the slots that haven't been successfully filled.

The element looks like this when inserted into the page:

```html
<person-details>
  <p slot="person-name">Dr. Shazaam</p>
  <span slot="person-age">Immortal</span>
  <span slot="person-occupation">Superhero</span>
</person-details>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web components](/en-US/docs/Web/API/Web_components)
