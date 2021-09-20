---
title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
tags:
  - API
  - Constructor
  - CustomEvent
  - Reference
  - events
browser-compat: api.CustomEvent.CustomEvent
---
{{APIRef("DOM")}}

The **`CustomEvent()`** constructor creates a new
{{domxref("CustomEvent")}}.

{{AvailableInWorkers}}

## Syntax

```js
 event = new CustomEvent(typeArg, customEventInit);
```

### Parameters

- `typeArg`
  - : A {{domxref("DOMString")}} representing the name of the event.
- `customEventInit` {{optional_inline}}

  - : A `CustomEventInit` dictionary, having the following fields:

    - `"detail"`, optional and defaulting to `null`, of type
      any, that is an event-dependent value associated with the event.

    > **Note:** _The `CustomEventInit`\*\* dictionary also accepts fields
    > from the {{domxref("Event.Event", "EventInit")}} dictionary._

### Return value

A new `CustomEvent` object of the specified type, with any other properties
configured according to the `CustomEventInit` dictionary (if one was
provided).

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

## Polyfill

You can polyfill the `CustomEvent()` constructor functionality in Internet
Explorer 9 and higher with the following code:

```js
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();
```

Internet Explorer >= 9 adds a CustomEvent object to the window, but with correct
implementations, this is a function.

## See also

- {{domxref("CustomEvent")}}
- [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events)
