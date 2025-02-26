---
title: "Element: ariaBusy property"
short-title: ariaBusy
slug: Web/API/Element/ariaBusy
page-type: web-api-instance-property
browser-compat: api.Element.ariaBusy
---

{{APIRef("DOM")}}

The **`ariaBusy`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) attribute, which indicates whether an element is being modified, as assistive technologies may want to wait until the modifications are complete before exposing them to the user.

## Value

A string with one of the following values:

- `"true"`
  - : The element is being updated.
- `"false"`
  - : There are no expected updates for the element.

## Examples

In this example the `aria-busy` attribute on the element with an ID of `clock` is set to "false". Using `ariaBusy` we update the value to "true".

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
let el = document.getElementById("clock");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
