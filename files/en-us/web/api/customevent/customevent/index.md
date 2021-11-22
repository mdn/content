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

  - : An object, with the following fields:

    - `"detail"`, optional and defaulting to `null`, of any type,
      containing an event-dependent value associated with the event.
      This is available to the handler using the {{domxref("CustomEvent.detail")}} property.

    - Any field that can be used in the init object of the {{domxref("Event.Event", "Event()")}} constructor.

### Return value

A new `CustomEvent` object of the specified type, with any other properties
configured according to the dictionary if one was provided.

## Example

```js
// add an appropriate event listener
obj.addEventListener("cat", function(e) { process(e.detail) });

// create and dispatch the event
var event = new CustomEvent("cat", {
  detail: {
    hazcheeseburger: true
  }
});
obj.dispatchEvent(event);
```

Additional examples can be found at [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CustomEvent")}}
- [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events)
