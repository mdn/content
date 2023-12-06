---
title: "CustomEvent: detail property"
short-title: detail
slug: Web/API/CustomEvent/detail
page-type: web-api-instance-property
browser-compat: api.CustomEvent.detail
---

{{APIRef("DOM")}}

The read-only **`detail`** property of the {{domxref("CustomEvent")}} interface
returns any data passed when initializing the event.

## Value

Whatever data the event was initialized with.

## Example

```js
// create custom events
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

// add an appropriate event listener
obj.addEventListener("animalfound", (e) => console.log(e.detail.name));

// dispatch the events
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);

// "cat" and "dog" logged in the console
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CustomEvent")}}
