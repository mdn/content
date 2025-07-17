---
title: "HTMLStyleElement: blocking property"
short-title: blocking
slug: Web/API/HTMLStyleElement/blocking
page-type: web-api-instance-property
browser-compat: api.HTMLStyleElement.blocking
---

{{APIRef("HTML DOM")}}

The **`blocking`** property of the {{domxref("HTMLStyleElement")}} interface is a string indicating that certain operations should be blocked on the fetching of critical subresources.

It reflects the `blocking` attribute of the {{HTMLElement("style")}} element.

## Value

A string. Must be a space-separated list of blocking tokens listed below indicating the operations that are to be blocked:

- `render`
  - : The rendering of content on the screen is blocked.

## Examples

```html
<style id="el" blocking="render">
  p {
    color: blue;
  }
</style>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Output: "render"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.blocking")}}
- {{domxref("HTMLScriptElement.blocking")}}
