---
title: CustomElementRegistry.get()
slug: Web/API/CustomElementRegistry/get
tags:
  - API
  - CustomElementRegistry
  - Experimental
  - Method
  - Reference
  - Web Components
  - custom elements
  - get
browser-compat: api.CustomElementRegistry.get
---
{{APIRef("CustomElementRegistry")}}

The **`get()`** method of the
{{domxref("CustomElementRegistry")}} interface returns the constructor for a
previously-defined custom element.

## Syntax

```js
constructor = customElements.get(name);
```

### Parameters

- name
  - : The name of the custom element whose constructor you want to return a reference to.

### Return value

The constructor for the named custom element, or `undefined` if there is no
custom element definition with that name.

## Examples

```js
customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      let templateContent = document.getElementById('my-paragraph').content;
      super() // returns element this scope
        .attachShadow({mode: 'open'}) // sets AND returns this.shadowRoot
        .append(templateContent.cloneNode(true));
  }
})

// Return a reference to the my-paragraph constructor
let ctor = customElements.get('my-paragraph');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
