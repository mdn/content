---
title: CustomEvent.detail
slug: Web/API/CustomEvent/detail
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.CustomEvent.detail
---
{{APIRef("DOM")}}

The read-only **`detail`** property of the {{domxref("CustomEvent")}} interface
returns any data passed when initializing the event.

## Value

Whatever data the event was initialized with.

## Example

```js
// add an appropriate event listener
obj.addEventListener("cat", function(e) { process(e.detail) });

// create and dispatch the event
let event = new CustomEvent("cat", {
  detail: {
    hazcheeseburger: true
  }
});
obj.dispatchEvent(event);

// Will return an object containing the hazcheeseburger property
let myDetail = event.detail;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CustomEvent")}}
