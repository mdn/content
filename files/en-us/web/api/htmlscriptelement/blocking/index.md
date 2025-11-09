---
title: "HTMLScriptElement: blocking property"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.blocking
---

{{APIRef("HTML DOM")}}

The **`blocking`** property of the {{domxref("HTMLScriptElement")}} interface is a string indicating that certain operations should be blocked on the fetching of the script.

It reflects the `blocking` attribute of the {{HTMLElement("script")}} element.

## Value

A string. Must be a space-separated list of blocking tokens listed below indicating the operations that are to be blocked:

- `render`
  - : The rendering of content on the screen is blocked.

    > [!NOTE]
    > Only `script` elements in the document's `<head>` can possibly block rendering. Scripts are not render-blocking by default; if a `script` element does not include `type="module"`, `async`, or `defer`, then it blocks _parsing_, not _rendering_. If such a `script` element is added dynamically via script, you must set `blocking = "render"` for it to block rendering.

## Examples

```html
<script id="el" async blocking="render"></script>
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
- {{domxref("HTMLStyleElement.blocking")}}
