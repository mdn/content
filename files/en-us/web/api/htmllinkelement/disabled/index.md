---
title: "HTMLLinkElement: disabled property"
short-title: disabled
slug: Web/API/HTMLLinkElement/disabled
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.disabled
---

{{APIRef("HTML DOM")}}

The **`disabled`** property of the {{domxref("HTMLLinkElement")}} interface is a boolean value that represents whether the link is disabled. It only has an effect with style sheet links (`rel` property set to `stylesheet`).

If `disabled` attribute is specified in the HTML when it is loaded, the stylesheet will not be loaded during page load. Instead, the stylesheet will be loaded only when the `disabled` property is set to `false` or removed. Setting the `disabled` property using JavaScript causes the stylesheet to be removed from the document's {{domxref("Document.styleSheets")}} list.

It reflects the `disabled` attribute of the {{HTMLElement("link")}} element.

## Value

A boolean.

## Examples

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  disabled
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.disabled); // Output: true

// Set the disabled property to false to enable the stylesheet
el.disabled = false;
console.log(el.disabled); // Output: false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLScriptElement.integrity")}}
- [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity)
