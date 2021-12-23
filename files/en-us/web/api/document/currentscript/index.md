---
title: Document.currentScript
slug: Web/API/Document/currentScript
tags:
  - API
  - DOM
  - Document
  - Property
  - Reference
browser-compat: api.Document.currentScript
---
{{APIRef("DOM")}}

The **`Document.currentScript`** property returns the {{HTMLElement("script")}} element whose script is currently being processed and [isn't a JavaScript module](https://github.com/whatwg/html/issues/997). (For modules use [import.meta](/en-US/docs/Web/JavaScript/Reference/Statements/import.meta) instead.)

It's important to note that this will not reference the {{HTMLElement("script")}}
element if the code in the script is being called as a callback or event handler; it
will only reference the element while it's initially being processed.

## Syntax

```js
var curScriptElement = document.currentScript;
```

## Example

This example checks to see if the script is being executed asynchronously:

```js
if (document.currentScript.async) {
  console.log("Executing asynchronously");
} else {
  console.log("Executing synchronously");
}
```

[View Live Examples](https://media.prod.mdn.mozit.cloud/samples/html/currentScript.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [import.meta](/en-US/docs/Web/JavaScript/Reference/Statements/import.meta)
- {{HTMLElement("script")}}
- {{DOMxRef("document.onafterscriptexecute")}}
- {{DOMxRef("document.onbeforescriptexecute")}}
