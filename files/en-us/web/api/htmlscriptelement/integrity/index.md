---
title: "HTMLScriptElement: integrity property"
short-title: integrity
slug: Web/API/HTMLScriptElement/integrity
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.integrity
---

{{APIRef("HTML DOM")}}

The **`integrity`** property of the {{domxref("HTMLScriptElement")}} interface is a string that contains inline metadata that a browser can use to verify that a fetched resource has been delivered without unexpected manipulation.

It reflects the `integrity` attribute of the {{HTMLElement("script")}} element.

## Value

A string.

## Examples

```html
<script
  id="el"
  src="https://example.com/example-framework.js"
  type="text/javascript"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // Output: "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.integrity")}}
- [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity)
