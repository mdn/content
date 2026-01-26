---
title: "ClipboardChangeEvent: ClipboardChangeEvent() constructor"
short-title: ClipboardChangeEvent()
slug: Web/API/ClipboardChangeEvent/ClipboardChangeEvent
page-type: web-api-constructor
browser-compat: api.ClipboardChangeEvent.ClipboardChangeEvent
---

{{securecontext_header}}{{APIRef("Clipboard API")}}

The **`ClipboardChangeEvent()`** constructor creates a new {{domxref("ClipboardChangeEvent")}} object. This constructor is called by the browser when a `clipboardchange` event occurs. The `clipboardchange` event fires whenever the system clipboard contents are changed either by a web app or any other system application.

> [!NOTE]
> This event constructor is generally not needed for production websites. It's primary use is for tests that require an instance of this event.

## Syntax

```js-nolint
new ClipboardChangeEvent(type)
new ClipboardChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event. It should always be set to `clipboardchange`.
- `options` {{Optional_Inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `types`
    - : A sequence of strings representing the data types available on the system clipboard.
    - `changeId`
    - : A integer representing a unique identifier for the clipboard change operation.

### Return value

A new {{domxref("ClipboardChangeEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
