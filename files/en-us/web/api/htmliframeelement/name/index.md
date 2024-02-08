---
title: "HTMLIFrameElement: name property"
short-title: name
slug: Web/API/HTMLIFrameElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.name
---

{{APIRef("HTML DOM")}}

The **`name`** property of the {{domxref("HTMLIFrameElement")}} interface is a string value that reflects the `name` attribute of the {{HTMLElement("iframe")}} element, indicating the specific name of the `<iframe>` element.

## Value

A string.

## Examples

```html
<iframe id="el" name="example"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.name); // Output: "example"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
