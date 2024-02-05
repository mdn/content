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

### Basic component

To demonstrate how `exportparts` is used to enable targeting parts within nested components, we will create a component, and then nest it within another component.

#### HTML

First, let's create a card component that we will then wrap with another component. We also use the new element we created, populating the slots with plain text as content.

```html
<template id="card-component-template">
  <style>
    .base {
      display: grid;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-component>
  <p slot="header_slot">This is the header</p>
  <p slot="body_slot">This is the body</p>
  <p slot="footer_slot">This is the footer</p>
</card-component>
```

#### JavaScript

We use JavaScript to define our web component defined in the HTML above:

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

#### CSS

We style parts of the `<card-component>` shadow tree using the `::parts()` pseudo-element:

````css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### Results

{{ EmbedLiveSample('Basic_component', '100%', '160') }}
### Nested component

Continuing the above `<card-component>` example, we create a nested component by wrapping the `<card-component>` within another component. We then export the parts from the nested component that we want to make styleable from outside the component's shadow tree with the `exportparts` attribute.

```html
<template id="card-wrapper">
  <card-component exportparts="base, header, body, footer"></card-component>
</template>
````

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
::part(body) {
   color: red;
   font-style: italic;
}

::part(header) {
  font-weight: bold;
}
```

### Exposing mapped parts

To rename exported parts, we include a comma-separated list of mapped parts, with each mapped part including the original name and exported name separated by a colon (`:`):

#### HTML

We update the prior `<card-wrapper>` custom element with the remapping syntax (omitting `body` from the exported parts list):

```html
<template id="card-wrapper">
  <card-component
    exportparts="
       base:card__base, 
       header:card__header, 
       footer:card__footer
     ">
  </card-component>
</template>
```

#### JavaScript

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

#### CSS

In targetting parts of the `<card-component>` from within the `<card-wrapper>`, we can only style the exported parts via their exposed part names:

```css
/* selects the exported parts name */
card-wrapper::part(card__header) {
  font-weight: bold;
}
/* selects nothing: these part names were not exported */
card-wrapper::part(footer),
::part(body) {
  font-weight: bold;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
