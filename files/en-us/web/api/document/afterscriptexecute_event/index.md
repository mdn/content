---
title: "Document: afterscriptexecute event"
short-title: afterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.Document.afterscriptexecute_event
---

{{APIRef("DOM")}}{{non-standard_header}}

The `afterscriptexecute` event fires when a static {{HTMLElement("script")}} element finishes executing its script. It does not fire if the element is added dynamically, such as with {{domxref("Node.appendChild()", "appendChild()")}}.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("afterscriptexecute", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onafterscriptexecute = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener("afterscriptexecute", finished);
// Or (but note that this replaces other event listeners
// added using onafterscriptexecute, if any)
document.onafterscriptexecute = finished;
```

[View Live Example](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.beforescriptexecute_event", "beforescriptexecute")}} event of `Document`
- {{domxref("Document.currentScript")}}
