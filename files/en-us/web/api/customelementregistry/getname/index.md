---
title: "CustomElementRegistry: getName() method"
short-title: getName()
slug: Web/API/CustomElementRegistry/getName
page-type: web-api-instance-method
browser-compat: api.CustomElementRegistry.getName
---

{{APIRef("CustomElementRegistry")}}

The **`getName()`** method of the
{{domxref("CustomElementRegistry")}} interface returns the name for a
previously-defined custom element.

## Syntax

```js-nolint
getName(constructor)
```

### Parameters

- `constructor`
  - : Constructor for the custom element.

### Return value

The name for the previously defined custom element, or `null` if there is no custom element defined with the constructor.

## Examples

```js
class MyParagraph extends HTMLElement {
  constructor() {
    let templateContent = document.getElementById("my-paragraph").content;
    super() // returns element this scope
      .attachShadow({ mode: "open" }) // sets AND returns this.shadowRoot
      .append(templateContent.cloneNode(true));
  }
}

customElements.define("my-paragraph", MyParagraph);

// Return a reference to the my-paragraph constructor
customElements.getName(MyParagraph) === "my-paragraph";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
