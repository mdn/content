---
title: ElementInternals.shadowRoot
slug: Web/API/ElementInternals/shadowRoot
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - shadowRoot
  - ElementInternals
browser-compat: api.ElementInternals.shadowRoot
---
{{DefaultAPISidebar("DOM")}}

The **`shadowRoot`** read-only property of the {{domxref("ElementInternals")}} interface returns the {{domxref("ShadowRoot")}} for this element.

## Value

A {{domxref("ShadowRoot")}} if the element has a shadow root, otherwise `null`.

## Examples

The following example prints the value of `shadowRoot` to the console, immediately after calling {{domxref("HTMLElement.attachInternals()")}}. At this point the value is `null`. After calling {{domxref("Element.attachShadow()")}} the element has a Shadow Root, and `shadowRoot` returns the object representing it.

```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();

    console.log(this.internals_.shadowRoot); // null

    this.attachShadow({ mode: "open" });

    console.log(this.internals_.shadowRoot); // a ShadowRoot object
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
