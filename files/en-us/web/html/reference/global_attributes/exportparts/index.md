---
title: exportparts
slug: Web/HTML/Reference/Global_attributes/exportparts
page-type: html-attribute
browser-compat: html.global_attributes.exportparts
---

{{HTMLSidebar("Global_attributes")}}

The **`exportparts`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) allows you to select and style elements existing in nested {{Glossary("shadow tree", "shadow trees")}}, by exporting their `part` names.

The shadow tree is an isolated structure where identifiers, classes, and styles cannot be reached by selectors or queries belonging to a regular DOM. There are two HTML attributes that can be applied to shadow tree elements that enable targeting CSS styles from outside to shadow tree: `part` and `exportparts`.

The global [`part`](/en-US/docs/Web/HTML/Reference/Global_attributes/part) attribute makes a shadow tree element visible to its parent DOM. A `part` name is used as the parameter of the {{CSSxRef("::part", "::part()")}} pseudo-element. In this way, you can apply CSS styles to elements in the shadow tree from outside of it. However, the `::part()` pseudo-element is only visible to the parent DOM. This means that when a shadow tree is nested, the parts are not visible to any ancestors other than the direct parent. The `exportparts` attribute solves this limitation.

The `exportparts` attribute enables shadow tree parts to be visible outside the shadow DOM. This concept is referred to as "exporting". The `exportparts` attribute is placed on the element's _shadow host_, which is the element to which the _shadow tree_ is attached. The value of this attribute is a comma-separated list of `part` names present in the shadow tree. These names are made available to the DOMs outside the current structure.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

When exporting a `part`, you have the option to assign a different name to the part, as shown in the snippet below. The value of the `exportparts` attribute is really a comma-separated list of part-name mappings. So the `exportparts` attribute in the above code snippet is the equivalent of `exportparts="part1:part1, part2:part2, part5:part5`, indicating that each `part` is exported with the same name. In each mapping, the first string specifies the name of the part within the shadow tree, and the second string specifies the name with which the part will be exposed externally.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Examples

### Basic component

To demonstrate how `exportparts` is used to enable targeting parts within nested components, we will create a component, and then nest it within another component.

#### HTML

First, let's create a card component that we will then wrap with another component. We also use the new element we created, populating the slots with plain text as content.

```html
<template id="card-component-template">
  <style>
    :host {
      display: block;
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

We style parts of the `<card-component>` shadow tree using the {{cssxref("::part")}} pseudo-element:

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### Results

{{ EmbedLiveSample('Basic_component', '100%', '160') }}

### Nested component

Continuing the above `<card-component>` example, we create a nested component by wrapping the `<card-component>` within another component; in this case, the `<card-wrapper>` component. We then export the parts from the nested component that we want to make stylable from outside the component's shadow tree with the `exportparts` attribute.

#### HTML

```html hidden
<template id="card-component-template">
  <style>
    :host {
      display: block;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>
```

```html
<template id="card-wrapper">
  <style>
    :host {
      display: block;
    }
  </style>
  <card-component exportparts="base, header, body">
    <slot name="H" slot="header_slot"></slot>
    <slot name="B" slot="body_slot"></slot>
    <slot name="F" slot="footer_slot"></slot>
  </card-component>
</template>
```

We include a `<card-wrapper>` custom element, and a `<card-component>` for comparison:

```html
<h2>Card wrapper</h2>

<card-wrapper>
  <p slot="H">This is the header</p>
  <p slot="B">This is the body</p>
  <p slot="F">This is the footer</p>
</card-wrapper>

<h2>Card component</h2>

<card-component>
  <p slot="header_slot">This is the header</p>
  <p slot="body_slot">This is the body</p>
  <p slot="footer_slot">This is the footer</p>
</card-component>
```

#### JavaScript

```js hidden
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

Now, we can target parts of the `<card-component>` directly and when nested within a `<card-wrapper>` like so:

```css
h2 {
  background-color: #dedede;
}

card-wrapper,
card-component {
  border: 1px dashed blue;
  width: fit-content;
}

::part(body) {
  color: red;
  font-style: italic;
}

::part(header),
::part(footer) {
  font-weight: bold;
}
```

#### Results

{{ EmbedLiveSample('Nested_component', '100%', '400') }}

Note `footer` is not bold when nested, as we did not include it in `exportparts`.

### Exposing mapped parts

To rename exported parts, we include a comma-separated list of mapped parts, with each mapped part including the original name and exported name separated by a colon (`:`):

#### HTML

We update the prior `<card-wrapper>` custom element with the remapping syntax (omitting `body` from the exported parts list):

```html hidden
<template id="card-component-template">
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-wrapper>
  <p slot="H">This is the header</p>
  <p slot="B">This is the body</p>
  <p slot="F">This is the footer</p>
</card-wrapper>
```

```html
<template id="card-wrapper">
  <card-component
    exportparts="
       base:card__base,
       header:card__header,
       footer:card__footer
     ">
    <span slot="header_slot"><slot name="H"></slot></span>
    <span slot="body_slot"><slot name="B"></slot></span>
    <span slot="footer_slot"><slot name="F"></slot></span>
  </card-component>
</template>
```

#### JavaScript

```js hidden
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

In targeting the parts of the `<card-component>` from within the `<card-wrapper>`, we can only style the exported parts via their exposed part names:

```css
/* selects the exported parts name */
::part(card__header) {
  font-weight: bold;
}
/* selects nothing: these part names were not exported */
::part(footer),
::part(body) {
  font-weight: bold;
}
```

#### Results

{{ EmbedLiveSample('Exposing_mapped_parts', '100%', '160') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`part`](/en-US/docs/Web/HTML/Reference/Global_attributes/part) HTML attribute
- {{HTMLElement("template")}} and {{HTMLElement("slot")}} HTML elements
- {{CSSXref("::part")}} and {{CSSXref("::slotted")}} pseudo-elements
- {{CSSXref(":host")}} pseudo-class
- [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot) interface
- {{DOMxRef("Element.part")}} property
- [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping) module
