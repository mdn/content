---
title: exportparts
slug: Web/HTML/Global_attributes/exportparts
page-type: html-attribute
browser-compat: html.global_attributes.exportparts
---

{{HTMLSidebar("Global_attributes")}}

The **`exportparts`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) allows you to select and style elements existing in nested {{Glossary("shadow tree", "shadow trees")}}, by exporting their `part` names.

The shadow tree is an isolated structure where identifiers, classes, and styles cannot be reached by selectors or queries belonging to a regular DOM.
To apply a style to an element living in a shadow tree, by CSS rule created outside of it, [`part`](/en-US/docs/Web/HTML/Global_attributes#part) global attribute has to be used. It has to be assigned to an element present in Shadow Tree, and its value should be some identifier.
Rules present outside of the shadow tree, must use the {{CSSxRef("::part")}} pseudo-element, containing the same identifier as the argument.

The global attribute [`part`](/en-US/docs/Web/HTML/Global_attributes#part) makes the element visible on just a single level of depth. When the shadow tree is nested, parts will be visible only to the parent of the shadow tree but not to its ancestor. Exporting parts further down is exactly what `exportparts` attribute is for.

Attribute `exportparts` must be placed on a _shadow Host_, which is the element to which the _shadow tree_ is attached. The value of the attribute should be a comma-separated list of part names present in the shadow tree and which should be made available via a DOM outside of the current structure.

## Examples

First let's create a card component that we will then wrap with another component.

```html
<template id="card-component-template">
  <style>
    .base {
      display: grid;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header"></slot></div>
    <div part="body"><slot></slot></div>
    <div part="footer"><slot name="footer"></slot></div>
  </div>
</template>
```

Then we can take the HTML above, and use it to "define" our web component.

```js
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

### Re-exporting parts

With the above `<card-component>`, we could wrap it with another component and export all of the "parts" as is.

```html
<template id="card-wrapper">
  <card-component exportparts="base, header, body, footer"></card-component>
</template>
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const cardWrapper = document.getElementById("card-wrapper").content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardWrapper.cloneNode(true));
    }
  },
);
```

Now we can target parts on the `<card-component>` from the `<card-wrapper>` like so:

```css
card-wrapper::part(header) {
  font-weight: bold;
}
```

### Renaming / Remapping parts

To rename an exportpartm the syntax looks something like this: `exportparts="<original-name>:<new-name>,<original-name>:<new-name>"`

And here's the prior `CardWrapper` with the remapping syntax:

```html
<template id="card-wrapper">
  <card-component 
     exportparts="
       base:card__base, 
       header:card__header, 
       body:card__body, 
       footer:card__footer
     "
  >
  </card-component>
</template>
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const cardWrapper = document.getElementById("card-wrapper").content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardWrapper.cloneNode(true));
    }
  },
);
```

Now we can target parts on the `<card-component>` from the `<card-wrapper>` like so:

```css
card-wrapper::part(card__header) {
  font-weight: bold;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
