---
title: "CustomElementRegistry: get() method"
short-title: get()
slug: Web/API/CustomElementRegistry/get
page-type: web-api-instance-method
browser-compat: api.CustomElementRegistry.get
---

{{APIRef("Web Components")}}

The **`get()`** method of the
{{domxref("CustomElementRegistry")}} interface returns the constructor for a
previously-defined custom element.

## Syntax

```js-nolint
get(name)
```

### Parameters

- `name`
  - : The name of the custom element.

### Return value

The constructor for the named custom element, or {{jsxref("undefined")}} if there is no custom element defined with the name.

## Examples

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      const template = document.getElementById("custom-paragraph");
      super() // returns element this scope
        .attachShadow({ mode: "open" }) // sets AND returns this.shadowRoot
        .append(document.importNode(template.content, true));
    }
  },
);

// Return a reference to the my-paragraph constructor
const ctor = customElements.get("my-paragraph");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
