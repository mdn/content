---
title: "HTMLLinkElement: integrity property"
short-title: integrity
slug: Web/API/HTMLLinkElement/integrity
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.integrity
---

{{APIRef("HTML DOM")}}

The **`integrity`** property of the {{domxref("HTMLLinkElement")}} interface is a string containing inline metadata that a browser can use to verify that a fetched resource has been delivered without unexpected manipulation.

It reflects the `integrity` attribute of the {{HTMLElement("link")}} element.

## Value

A string.

## Examples

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // Output: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLScriptElement.integrity")}}
- [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity)
