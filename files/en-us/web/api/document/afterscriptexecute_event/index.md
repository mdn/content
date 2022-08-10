---
title: 'Document: afterscriptexecute event'
slug: Web/API/Document/afterscriptexecute_event
page-type: web-api-event
tags:
 - Document
 - afterscriptexecute
 - API
 - Event
 - Reference
 - Non-standard
browser-compat: api.Document.afterscriptexecute_event
---
{{APIRef}}{{non-standard_header}}

The `afterscriptexecute` event fires when a static {{HTMLElement("script")}} element finishes executing its script. It does not fire if the element is added dynamically, such as with {{domxref("Node.appendChild()", "appendChild()")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('afterscriptexecute', (event) => { });

onafterscriptexecute = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener('afterscriptexecute', finished, true);
// or
document.onafterscriptexecute = finished;
```

[View Live Example](https://media.prod.mdn.mozit.cloud/samples/html/currentScript.html)

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.beforescriptexecute_event")}}
- {{domxref("Document.currentScript")}}
