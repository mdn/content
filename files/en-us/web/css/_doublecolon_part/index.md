---
title: '::part()'
slug: Web/CSS/::part
tags:
  - '::part'
  - CSS
  - Draft
  - NeedsExample
  - Pseudo-element
  - Reference
  - Selector
browser-compat: css.selectors.part
---
{{CSSRef}}

The **`::part`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents any element within a [shadow tree](/en-US/docs/Web/Web_Components/Using_shadow_DOM) that has a matching {{HTMLAttrxRef("part")}} attribute.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Syntax

```
::part( <ident>+ )
```

## Examples

### HTML

```html
<template id="tabbed-custom-element">
<style>
*, ::before, ::after {
  box-sizing: border-box;
  padding: 1rem;
}
:host {
  display: flex;
}
</style>
<div part="tab active">Tab 1</div>
<div part="tab">Tab 2</div>
<div part="tab">Tab 3</div>
</template>

<tabbed-custom-element></tabbed-custom-element>
```

### CSS

```css
tabbed-custom-element::part(tab) {
  color: #0c0dcc;
  border-bottom: transparent solid 2px;
}

tabbed-custom-element::part(tab):hover {
  background-color: #0c0d19;
  border-color: #0c0d33;
}

tabbed-custom-element::part(tab):hover:active {
  background-color: #0c0d33;
}

tabbed-custom-element::part(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff inset,
    0 0 0 1px #0a84ff,
    0 0 0 4px rgba(10, 132, 255, 0.3);
}

tabbed-custom-element::part(active) {
  color: #0060df;
  border-color: #0a84ff !important;
}
```

### JavaScript

```js
let template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(template.id, class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content);
  }
});
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLAttrxRef("part")}} attribute - Used to define parts which can be selected by the `::part()` selector
- The {{HTMLAttrxRef("exportparts")}} attribute - Used to transitively export shadow parts from a nested shadow tree into a containing light tree.
- [Explainer: CSS Shadow ::part and ::theme](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md)
