---
title: "ErrorEvent: ErrorEvent() constructor"
short-title: ErrorEvent()
slug: Web/API/ErrorEvent/ErrorEvent
page-type: web-api-constructor
browser-compat: api.ErrorEvent.ErrorEvent
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The **`ErrorEvent()`** constructor creates a new {{domxref("ErrorEvent")}} object.

## Syntax

```js-nolint
new ErrorEvent(type)
new ErrorEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event. It is case-sensitive.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `message` {{optional_inline}}
      - : A string containing a human-readable error message describing the problem.
    - `filename` {{optional_inline}}
      - : A string containing the name of the script file in which the error occurred.
    - `lineno` {{optional_inline}}
      - : An integer containing the line number of the script file on which the error occurred.
    - `colno` {{optional_inline}}
      - : An integer containing the column number of the script file on which the error occurred.
    - `error` {{optional_inline}}
      - : A JavaScript value, such as an {{jsxref("Error")}} or {{domxref("DOMException")}}, representing the error associated with this event.

### Return value

A new {{domxref("ErrorEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
