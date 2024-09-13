---
title: "Document: beforescriptexecute event"
short-title: beforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
page-type: web-api-event
status:
  - non-standard
browser-compat: api.Document.beforescriptexecute_event
---

{{APIRef}}{{non-standard_header}}

The `beforescriptexecute` event fires when a static {{HTMLElement("script")}} is about to start executing. It does not fire if the element is added dynamically, such as with {{domxref("Node.appendChild()", "appendChild()")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforescriptexecute", (event) => {});

onbeforescriptexecute = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
function starting(e) {
  logMessage(`Starting script with ID: ${e.target.id}`);
}

document.addEventListener("beforescriptexecute", starting, true);
// or
document.onbeforescriptexecute = starting;
```

[View Live Example](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.afterscriptexecute_event", "afterscriptexecute")}} event of `Document`
- {{domxref("Document.currentScript")}}
