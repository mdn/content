---
title: "HTMLTextAreaElement: type property"
short-title: type
slug: Web/API/HTMLTextAreaElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.type
---

{{ApiRef("HTML DOM")}}

The read-only **`type`** property of the {{domxref("HTMLTextAreaElement")}} always returns `textarea`.

## Value

A string whose value is always `textarea`.

## Example

### HTML

```html
<textarea id="txtarea"></textarea>
```

### JavaScript

```js
const txtAreaElement = document.querySelector("#txtarea");
console.log(txtAreaElement.type); // Output: "textarea"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.type")}} property
