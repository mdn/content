---
title: CustomEvent.detail
slug: Web/API/CustomEvent/detail
tags:
  - API
  - CustomEvent
  - DOM
  - Property
  - Reference
  - detail
browser-compat: api.CustomEvent.detail
---
{{APIRef("DOM")}}

The **`detail`** readonly property of the
{{domxref("CustomEvent")}} interface returns any data passed when initializing the
event.

{{AvailableInWorkers}}

## Syntax

```js
 let myDetail = customEventInstance.detail;
```

### Return value

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
