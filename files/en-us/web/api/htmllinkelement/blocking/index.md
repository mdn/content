---
title: "HTMLLinkElement: blocking property"
short-title: blocking
slug: Web/API/HTMLLinkElement/blocking
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.blocking
---

{{APIRef("HTML DOM")}}

The **`blocking`** property of the {{domxref("HTMLLinkElement")}} interface is a string indicating that certain operations should be blocked on the fetching of an external resource.

It reflects the `blocking` attribute of the {{HTMLElement("link")}} element.

## Value

A string. Must be a space-separated list of blocking tokens listed below indicating the operations that are to be blocked:

- `render`
  - : The rendering of content on the screen is blocked.

    > [!NOTE]
    > Only `link` elements in the document's `<head>` can possibly block rendering. By default, a `link` element with `rel="stylesheet"` in the `<head>` blocks rendering when the browser discovers it during parsing. If such a `link` element is added dynamically via script, you must additionally set `blocking = "render"` for it to block rendering.

## Examples

```html
<link
  id="el"
  rel="stylesheet"
  href="/example.css"
  blocking="render"
  crossorigin />
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

- {{domxref("HTMLScriptElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
