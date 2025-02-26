---
title: ::part()
slug: Web/CSS/::part
page-type: css-pseudo-element
browser-compat: css.selectors.part
---

{{CSSRef}}

The **`::part`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents any element within a [shadow tree](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) that has a matching [`part`](/en-US/docs/Web/HTML/Global_attributes/part) attribute.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Description

The global [`part`](/en-US/docs/Web/HTML/Global_attributes/part) attribute makes a shadow tree element visible to its parent DOM. The part names declared using the `part` attribute are used as the parameter of the `::part()` pseudo-element. In this way, you can apply CSS styles to elements in the shadow tree from outside of it.

Part names are similar to CSS classes: multiple elements can have the same part name, and a single element can have multiple part names. All part names used in `::part()` pseudo-element must be present in the `part` value declared on the shadow tree element but the order of the part names doesn't matter, i.e., the selectors `::part(tab active)` and `::part(active tab)` are the same.

The `::part()` pseudo-element is only visible to the parent DOM. This means that when a shadow tree is nested, the parts are not visible to any ancestors other than the direct parent. The [`exportparts`](/en-US/docs/Web/HTML/Global_attributes/exportparts) attribute solves this limitation by explicitly exporting already defined `part` names, making them globally stylable.

[Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) (such as `::part(label):hover`) can be appended to the `::part()` selector, but [structural pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) that match based on tree information (such as `:empty`), rather than local element information (such as `:last-child`), cannot be appended.

Additional pseudo-elements, such as `::before`, can be appended to the `::part()` selector, but additional `::part()` element can't be appended. For example, `::part(confirm-button)::part(active)` never matches anything, i.e, it is not the same as `::part(confirm-button active)`. This is because doing so would expose more structural information than is intended.

## Syntax

```css
::part(<ident>+) {
  /* ... */
}
```

## Examples

### HTML

```html
<template id="tabbed-custom-element">
  <style>
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      padding: 1rem;
    }
    :host {
      display: flex;
    }
  </style>
  <div part="tab active">Tab A</div>
  <div part="tab">Tab B</div>
  <div part="tab">Tab C</div>
</template>

<tabbed-custom-element></tabbed-custom-element>
```

### CSS

```css
tabbed-custom-element::part(tab) {
  color: blue;
  border-bottom: transparent solid 4px;
}

tabbed-custom-element::part(tab):hover {
  background-color: black;
  color: white;
}

tabbed-custom-element::part(tab active) {
  border-color: blue !important;
}
```

### JavaScript

```js
const template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(
  template.id,
  class extends HTMLElement {
    constructor() {
      super().attachShadow({ mode: "open" }).append(template.content);
    }
  },
);
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`part`](/en-US/docs/Web/HTML/Global_attributes/part) attribute
- {{CSSxRef(":state",":state()")}} pseudo-class function
- [`exportparts`](/en-US/docs/Web/HTML/Global_attributes/exportparts) attribute
- [CSS shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts) module
