---
title: "CustomEvent: detail property"
short-title: detail
slug: Web/API/CustomEvent/detail
page-type: web-api-instance-property
browser-compat: api.CustomEvent.detail
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The read-only **`detail`** property of the {{domxref("CustomEvent")}} interface returns any data passed when initializing the event.

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

const element = document.createElement("div"); // create a <div> element

// add an appropriate event listener
element.addEventListener("animalfound", (e) => console.log(e.detail.name));

// dispatch the events
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);

// "cat" and "dog" logged in the console
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CustomEvent")}}
