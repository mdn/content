---
title: "NetworkInformation: change event"
short-title: change
slug: Web/API/NetworkInformation/change_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.NetworkInformation.change_event
---

{{apiref("Network Information API")}}{{SeeCompatTable}}

The **`change`** event fires when connection information changes, and the event
is received by the {{domxref("NetworkInformation")}} object.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
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

// Register for event changes:
navigator.connection.onchange = changeHandler;

// Another way: navigator.connection.addEventListener('change', changeHandler);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
