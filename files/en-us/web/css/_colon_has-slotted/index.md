---
title: ":has-slotted"
slug: Web/CSS/:has-slotted
page-type: css-pseudo-class
browser-compat: css.selectors.has-slotted
---

{{CSSRef}}

The **`:has-slotted`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches when the content of a {{HTMLElement("slot")}} element is not empty or not using the default value (see [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots) for more information).

> [!NOTE] Even a single whitespace text node is sufficient to make `:has-slotted` apply.

This only works when used inside CSS placed within a [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM).

```css
/* Selects the content of a <slot> element that has content that is not default  */
:has-slotted {
  color: green;
}

/* Selects the content of a <slot> element that has no content or default  */
:not(:has-slotted) {
  color: red;
}
```

## Syntax

```css-nolint
:has-slotted {
  /* ... */
}
```

## Examples

### Simple example

#### HTML

```html
<p>
  <template shadowrootmode="open">
    <style>
      :has-slotted {
        color: tomato;
      }
    </style>
    <slot name="one">Placeholder 1</slot>
    <slot name="two">Placeholder 2</slot>
  </template>
  <span slot="one">Slotted content one</span>
</p>
```

#### Result

These results show that the third web component does not have content for the `description` `<slot>`.

{{EmbedLiveSample("simple_examaple",100,300)}}

### Highlighting slots with required content

This example extends the [Creating a template with some slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots#creating_a_template_with_some_slots) example on the _Using templates and slots_ guide. This example highlights the `<slot>` element that should be filled in to give visual feedback.

#### HTML

In the {{HTMLElement("summary")}} element `required` classes have been added to the elements containing `<slot>` elements that need content.

```html
<summary>
  <span>
    <code class="name required">
      &lt;<slot name="element-name">NEED NAME</slot>&gt;
    </code>
    <span class="desc required">
      <slot name="description">NEED DESCRIPTION</slot>
    </span>
  </span>
</summary>
```

When the web component is called, this example is missing the value for the `<slot>` with the `name` of `description`.

```html
<element-details>
  <span slot="element-name">element-details</span>
  <dl slot="attributes">
    <dt>slot="element-name"</dt>
    <dd>The name of the element</dd>
    <dt>slot="description"</dt>
    <dd>Description of the element</dd>
  </dl>
</element-details>
```

#### CSS

Here the CSS selector is looking for an element that has the class of `required` and then checking if it does not match the `:has-slotted` pseudo class.

```css
.required :not(:has-slotted) {
  color: tomato;
}
```

```html nolint hidden live-sample___highlighting_slots_with_required_content
<!-- start define structure of component -->
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
    }
    h4 span {
      background: #217ac0;
      padding: 2px 6px 2px 6px;
    }
    h4 span {
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    h4 span {
      color: white;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
    code {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    .required :not(:has-slotted) {
      color: tomato;
    }
  </style>
  <details>
    <summary>
      <span>
        <code class="name required">
          &lt;<slot name="element-name">NEED NAME</slot>&gt;
        </code>
        <span class="desc required">
          <slot name="description">NEED DESCRIPTION</slot>
        </span>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributes</span></h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
<!-- end define structure of component -->
<!-- use component -->
<element-details>
  <span slot="element-name">template</span>
  <span slot="description"
    >A mechanism for holding client- side content that is not to be rendered
    when a page is loaded but may subsequently be instantiated during runtime
    using JavaScript.</span
  >
</element-details>
<element-details>
  <span slot="element-name">slot</span>
  <span slot="description"
    >A placeholder inside a web component that users can fill with their own
    markup, with the effect of composing different DOM trees together.</span
  >
  <dl slot="attributes">
    <dt>name</dt>
    <dd>The name of the slot.</dd>
  </dl>
</element-details>
<element-details>
  <span slot="element-name">element-details</span>
  <dl slot="attributes">
    <dt>slot="element-name"</dt>
    <dd>The name of the element</dd>
    <dt>slot="description"</dt>
    <dd>Description of the element</dd>
  </dl>
</element-details>
```

```js hidden live-sample___highlighting_slots_with_required_content
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  },
);
```

#### Result

These results show that the third web component does not have content for the `description` `<slot>`.

{{EmbedLiveSample("highlighting_slots_with_required_content",100,300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("template")}} element
- HTML {{HTMLElement("slot")}} element
- CSS {{CSSXRef("::slotted")}} pseudo-element
