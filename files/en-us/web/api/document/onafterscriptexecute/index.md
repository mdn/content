---
title: Document.onafterscriptexecute
slug: Web/API/Document/onafterscriptexecute
tags:
  - API
  - DOM
  - Non-standard
  - Property
  - Reference
browser-compat: api.Document.onafterscriptexecute
---
{{ApiRef("DOM")}}{{non-standard_header}}

The **`Document.onafterscriptexecute`** property references a
function that fires when a static {{HTMLElement("script")}} element finishes executing
its script. It does not fire if the element is added dynamically, such as with
{{domxref("Node.appendChild()", "appendChild()")}}.

## Syntax

```js
document.onafterscriptexecute = funcRef;
```

_funcRef_ is a function reference, called when the event is fired. The event's
`target` attribute is set to the {{HTMLElement("script")}} element that just
finished executing.

## Example

```js
function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener('afterscriptexecute', finished, true);
```

[View Live Example](https://media.prod.mdn.mozit.cloud/samples/html/currentScript.html)

## Specifications

- [HTML5](https://www.whatwg.org/specs/web-apps/current-work/#the-script-element)

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.onbeforescriptexecute")}}
- {{domxref("Document.currentScript")}}
