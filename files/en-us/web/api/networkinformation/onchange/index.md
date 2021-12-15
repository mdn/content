---
title: NetworkInformation.onchange
slug: Web/API/NetworkInformation/onchange
tags:
  - API
  - Event Handler
  - Experimental
  - Network Information API
  - NetworkInformation
  - Property
  - Reference
browser-compat: api.NetworkInformation.onchange
---
{{apiref("Network Information API")}}{{SeeCompatTable}}

The **`NetworkInformation.onchange`** event handler contains
the code that is fired when connection information changes, and the {{event("change")}}
is received by the {{domxref("NetworkInformation")}} object.

## Syntax

```js
netInfo.onchange = function() { /* ... */ }
```

## Examples

```js
// Get the connection type.
var type = navigator.connection.type;

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
