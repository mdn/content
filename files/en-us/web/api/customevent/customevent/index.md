---
title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
tags:
  - Constructor
  - Reference
browser-compat: api.CustomEvent.CustomEvent
---
{{APIRef("DOM")}}

The **`CustomEvent()`** constructor creates a new {{domxref("CustomEvent")}}.

## Syntax

```js
CustomEvent(typeArg);
CustomEvent(typeArg, options);
```

### Parameters

- `typeArg`
  - : A string representing the name of the event.
- `options` {{optional_inline}}

  - : An object, with the following properties:

    - `"detail"`, optional and defaulting to `null`, of any type,
      containing an event-dependent value associated with the event.
      This is available to the handler using the {{domxref("CustomEvent.detail")}} property.

    - Any properties that can be used in the init object of the {{domxref("Event.Event", "Event()")}} constructor.

## Example

```js
// create custom events
const catFound = new CustomEvent('animalfound', {
  detail: {
    name: 'cat'
  }
});
const dogFound = new CustomEvent('animalfound', {
  detail: {
    name: 'dog'
  }
});

// add an appropriate event listener
obj.addEventListener('animalfound', (e) => console.log(e.detail.name));

// dispatch the events
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);

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
