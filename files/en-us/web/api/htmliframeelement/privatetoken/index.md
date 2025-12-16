---
title: "HTMLIFrameElement: privateToken property"
short-title: privateToken
slug: Web/API/HTMLIFrameElement/privateToken
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.privateToken
---

{{APIRef("HTML DOM")}}

The **`privateToken`** property of the {{domxref("HTMLIFrameElement")}} interface returns a string representation of an options object representing a [private state token](/en-US/docs/Web/API/Private_State_Token_API/Using) operation; this object has the same structure as the `RequestInit` dictionary's [`privateToken`](/en-US/docs/Web/API/RequestInit#privatetoken) property.

This attribute mirrors the content of the associated `<iframe>` element's [`privateToken`](/en-US/docs/Web/HTML/Reference/Elements/iframe#privatetoken) attribute.

## Value

A string.

## Examples

```html
<iframe id="el" privateToken="{version: 1,operation: 'token-request'}">
</iframe>
```

```js
const el = document.getElementById("el");
console.log(el.privateToken);
// Logs "{version: 1,operation: 'token-request'}"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)
