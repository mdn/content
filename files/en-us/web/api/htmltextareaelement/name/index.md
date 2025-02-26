---
title: "HTMLTextAreaElement: name property"
short-title: name
slug: Web/API/HTMLTextAreaElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.name
---

{{ApiRef("HTML DOM")}}

The **`name`** property of the {{domxref("HTMLTextAreaElement")}} interface indicates the name of the {{HTMLElement("textarea")}} element. It reflects the element's [`name`](/en-US/docs/Web/HTML/Element/textarea#name) attribute.

## Value

A string representing the element's name.

## Example

```js
const textareaElement = document.querySelector("#message");
console.log(`Element's name: ${textareaElement.name}`);
textareaElement.name = "response"; // sets or updates the element's name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.value")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
