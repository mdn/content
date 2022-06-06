---
title: Event()
slug: Web/API/Event/Event
page-type: web-api-constructor
tags:
  - Constructor
  - Reference
browser-compat: api.Event.Event
---
{{APIRef("DOM")}}

The **`Event()`** constructor creates a new {{domxref("Event")}} object. An event created in this way is called a _synthetic event_, as opposed to an event fired by the browser, and can be [dispatched](/en-US/docs/Web/Events/Creating_and_triggering_events) by a script.

## Syntax

```js
new Event(type)
new Event(type, options)
```

### Values

- `type`
  - : A string with the name of the event.
- `options` {{optional_inline}}
  - : An object with the following properties:
    - `bubbles` {{optional_inline}}
      - : A boolean value indicating whether the event bubbles. The default is
        `false`.
    - `cancelable` {{optional_inline}}
      - : A boolean value indicating whether the event can be cancelled. The
        default is `false`.
    - `composed` {{optional_inline}}
      - : A boolean value indicating whether the event will trigger listeners
        outside of a shadow root (see {{domxref("Event.composed")}} for more details). The
        default is `false`.

### Return value

A new {{domxref("Event")}} object.

## Example

```js
// create a look event that bubbles up and cannot be canceled

const evt = new Event("look", {"bubbles":true, "cancelable":false});
document.dispatchEvent(evt);

// event can be dispatched from any element, not only the document
myDiv.dispatchEvent(evt);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Event")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events)
