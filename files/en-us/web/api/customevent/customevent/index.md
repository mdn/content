---
title: "CustomEvent: CustomEvent() constructor"
short-title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
page-type: web-api-constructor
browser-compat: api.CustomEvent.CustomEvent
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`CustomEvent()`** constructor creates a new {{domxref("CustomEvent")}} object.

## Syntax

```js-nolint
new CustomEvent(type)
new CustomEvent(type, options)
```

### Parameters

- `type`
  - : A string providing the name of the event. Event names are case-sensitive.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `detail` {{optional_inline}}
      - : An event-dependent value associated with the event. This value is then available to the handler using the {{domxref("CustomEvent.detail")}} property.
        It defaults to `null`.

### Return value

A new {{domxref("CustomEvent")}} object.

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

Additional examples can be found at [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CustomEvent")}}
- [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events)
