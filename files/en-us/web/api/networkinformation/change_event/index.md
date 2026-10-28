---
title: "NetworkInformation: change event"
short-title: change
slug: Web/API/NetworkInformation/change_event
page-type: web-api-event
browser-compat: api.NetworkInformation.change_event
---

{{apiref("Network Information API")}} {{AvailableInWorkers}}

The **`change`** event of the {{domxref("NetworkInformation")}} interface fires when connection information changes, and the event is received by the {{domxref("NetworkInformation")}} object.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("change", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onchange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
// Get the connection type.
const type = navigator.connection.type;

function changeHandler(e) {
  // Handle change of connection type here.
}

// Register for event changes (but note that this replaces other event listeners
// added using onchange, if any):
navigator.connection.onchange = changeHandler;

// Another way: navigator.connection.addEventListener('change', changeHandler);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
