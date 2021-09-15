---
title: Document.onbeforescriptexecute
slug: Web/API/Document/onbeforescriptexecute
tags:
  - API
  - DOM
  - Non-standard
  - Property
  - Reference
  - element.onbeforescriptexecute
browser-compat: api.Document.onbeforescriptexecute
---
{{ApiRef("DOM")}} {{non-standard_header }}

Fired when the code in a {{HTMLElement("script")}} element declared in an HTML
document is about to start executing. Does not fire if the element is added dynamically,
eg with appendChild().

## Syntax

```js
document.onbeforescriptexecute = funcRef;
```

_funcRef_ is a function reference, called when the event is fired. The event's
`target` attribute is set to the script {{domxref("Element")}} that is about
to be executed.

## Example

```js
function starting(e) {
  logMessage("Starting script with ID: " + e.target.id);
}

document.addEventListener("beforescriptexecute", starting, true);
```

[View Live Examples](https://media.prod.mdn.mozit.cloud/samples/html/currentScript.html)

## Specifications

- [HTML5](https://www.whatwg.org/specs/web-apps/current-work/#the-script-element)

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.onafterscriptexecute")}}
- {{domxref("Document.currentScript")}}
