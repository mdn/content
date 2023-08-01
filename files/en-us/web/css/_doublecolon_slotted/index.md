---
title: "::slotted()"
slug: Web/CSS/::slotted
page-type: css-pseudo-element
browser-compat: css.selectors.slotted
---

{{CSSRef}}

The **`::slotted()`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents any element that has been placed into a slot inside an HTML template (see [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots) for more information).

This only works when used inside CSS placed within a [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM). Note that this selector won't select a text node placed into a slot; it only targets actual elements.

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

In this example, we use a template with three slots:

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

We define the `<person-details>` custom element. In this case, we add styles with JavaScript, though we could have added them in a {{HTMLElement("style")}} block within the {{HTMLElement("template")}} with the same effect:

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
        "::slotted(*) { color: gray; font-family: sans-serif; } " +
        "::slotted(span) {text-decoration: underline;} ";

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

When filling the `style` element with content, you'll see that we select all slotted elements (`::slotted(*)`) and give them a different font and color. This differentiates them from the slots that haven't been filled. We styled all the slotted {{HTMLElement("span")}}s (`::slotted(span)`) to differentiate the `<span>`s from the {{HTMLElement("p")}}s.

Our markup includes three custom elements, including a custom element with an invalid slot name in a source order that differs from the `<template>`:

```html
<person-details>
  <p slot="person-name">Wonder Woman</p>
  <span slot="person-age">Immortal</span>
  <span slot="person-occupation">Superhero</span>
</person-details>

<person-details>
  <p slot="person-name">Malala Yousafzai</p>
  <span slot="person-age">17</span>
  <span slot="person-occupation">Activist</span>
</person-details>

<person-details>
  <span slot="person-age">44</span>
  <span slot="not-a-slot-name">Time traveller</span>
  <p slot="person-name">Dr. Who</p>
</person-details>
```

#### Result

{{EmbedLiveSample('Highlighting_slotted_elements', 500, 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web components](/en-US/docs/Web/API/Web_components)
