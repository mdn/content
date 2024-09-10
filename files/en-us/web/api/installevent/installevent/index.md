---
title: "InstallEvent: InstallEvent() constructor"
short-title: InstallEvent()
slug: Web/API/InstallEvent/InstallEvent
page-type: web-api-constructor
status:
  - deprecated
  - non-standard
browser-compat: api.InstallEvent.InstallEvent
---

{{APIRef("Service Workers API")}}{{Deprecated_Header}}{{Non-standard_header}}

The **`InstallEvent()`** constructor creates a new {{domxref("InstallEvent")}} object.

## Syntax

```js-nolint
new InstallEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `install`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can contain any custom settings that you want to apply to the event object. Currently no possible options are mandatory, but this has been defined for forward compatibility.

### Return value

A new {{domxref("InstallEvent")}} object.

## Specifications

_This feature is no more on the standard track._

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
