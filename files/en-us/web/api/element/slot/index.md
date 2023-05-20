---
title: "Element: slot property"
short-title: slot
slug: Web/API/Element/slot
page-type: web-api-instance-property
browser-compat: api.Element.slot
---

{{APIRef("Shadow DOM")}}

The **`slot`** property of the {{domxref("Element")}} interface
returns the name of the shadow DOM slot the element is inserted in.

A slot is a placeholder inside a [web component](/en-US/docs/Web/API/Web_components) that users can fill with their own markup (see [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots) for more information).

## Value

A string.

## Examples

In our [simple-template example](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([see it live](https://mdn.github.io/web-components-examples/simple-template/)), we create a trivial custom element example called
`<my-paragraph>` in which a shadow root is attached and then populated
using the contents of a template that contains a slot named `my-text`.

When `<my-paragraph>` is used in the document, the slot is populated
by a slottable element by including it inside the element with a
[`slot`](/en-US/docs/Web/HTML/Global_attributes/slot) attribute
with the value `my-text`. Here is one such example:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

In our JavaScript file we get a reference to the {{htmlelement("span")}} shown above,
then log a reference to the name of the corresponding `<slot>` element.

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.slot); // logs 'my-text'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
