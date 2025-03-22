---
title: "HTMLLinkElement: media property"
short-title: media
slug: Web/API/HTMLLinkElement/media
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.media
---

{{APIRef("HTML DOM")}}

The **`media`** property of the {{domxref("HTMLLinkElement")}} interface is a string representing a list of one or more media formats to which the resource applies.

It reflects the `media` attribute of the {{HTMLElement("link")}} element.

## Value

A string.

## Examples

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  media="screen and (min-width: 600px)"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.media); // Output: "screen and (min-width: 600px)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
