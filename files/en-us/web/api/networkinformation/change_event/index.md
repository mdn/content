---
title: 'NetworkInformation: change event'
slug: Web/API/NetworkInformation/change_event
page-type: web-api-event
tags:
  - API
  - Event Handler
  - Experimental
  - Network Information API
  - NetworkInformation
  - Event
  - Reference
browser-compat: api.NetworkInformation.change_event
---
{{apiref("Network Information API")}}{{SeeCompatTable}}

The **`change`** event fires when connection information changes, and the {{domxref("HTMLElement/change_event", "change")}}
is received by the {{domxref("NetworkInformation")}} object.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('change', (event) => { });

onchange = (event) => { };
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
